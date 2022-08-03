import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthContext from '../../../hooks/useAuthContext';
import { createPost } from '../../../services/forumService';
import { mapErrors } from '../../../helpers/mappers';
import { validatePost } from '../../../helpers/validators';

import './ForumNewPost.css';
import ErrorList from '../../Common/ErrorList';
import DarkHeader from '../../Common/DarkHeader';
import LoadingSpinner from '../../Common/LoadingSpinner';

const ForumNewPost = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title').trim();
    const text = formData.get('text').trim();
    const category = formData.get('category').trim();
    const author = user._id.trim();

    const data = { title, text, category, author };

    try {
      setIsLoading(true);
      setError(null);
      validatePost(data);
      const post = await createPost(data);

      ev.target.reset();
      navigate('/forum/' + post._id);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DarkHeader />
      <section id='new-post'>
        <div className='inner-width'>
          <h1 className='section-title'>Create new Post</h1>

          {error && <ErrorList error={error} classes={'large'}/>}
          {isLoading && <LoadingSpinner />}

          <form
            className='post-form forum-inputs'
            onSubmit={submitHandler}
            method='POST'
          >
            <div className='post-form__img'></div>
            <div className='post-form__inputs'>
              <input
                type='text'
                className='form-title'
                name='title'
                maxLength='80'
                placeholder='Enter post title'
              />

              <select name='category' className='form-category'>
                <option defaultValue=''>Select category</option>
                <option value='general'>General Discussion</option>
                <option value='problems'>Technical Problems</option>
                <option value='events'>Meetings and Events</option>
              </select>

              <textarea
                name='text'
                className='form-text'
                maxLength='2000'
                placeholder='Enter post content'
              ></textarea>

              <div className='form-buttons'>
                <button
                  type='button'
                  className='forum-btn btn-cancel responsive-btn'
                  onClick={() => navigate(-1)}
                >
                  <i className='fa-solid fa-rectangle-xmark' />
                  CANCEL
                </button>
                <button type='submit' className='forum-btn btn-blue responsive-btn'>
                  <i className='fa-solid fa-square-check' />
                  POST
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForumNewPost;
