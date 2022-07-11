import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './ForumNewPost.css';
import useAuthContext from '../../../hooks/useAuthContext';
import { createPost } from '../../../services/forumService';

import DarkHeader from '../../Common/DarkHeader';
import { mapErrors } from '../../../helpers/mappers';
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

    try {
      setIsLoading(true);
      setError(null);
      const post = await createPost({ title, text, category, author });
      setIsLoading(false);
      navigate('/forum/' + post._id);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
      setIsLoading(false);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <>
      <DarkHeader />
      <section id='new-post'>
        <div className='inner-width'>
          <h1 className='new-post-heading'>Create new Post</h1>

          {error && 
            <ul className='error-list large'>
              {error && error.map((e, i) => <li key={i}>{e.msg}</li>)}
            </ul>
          }
          {isLoading && <LoadingSpinner />}

          <form className='post-form' onSubmit={submitHandler} method='POST'>
            <h2 className='form-heading'>Post content</h2>

            <div className='form-inputs'>
              <label htmlFor='form-title'>Title</label>
              <input type='text' id='form-title' name='title' maxLength='80' />

              <label htmlFor='form-category'>Choose Category</label>
              <select name='category' id='form-category'>
                <option value='general'>General Discussion</option>
                <option value='problems'>Technical Problems</option>
                <option value='events'>Meetings and Events</option>
              </select>

              <label htmlFor='form-text'>Content</label>
              <textarea name='text' id='form-text' maxLength='2000'></textarea>

              <div className='form-buttons'>
                <button
                  type='button'
                  className='forum-btn btn-cancel'
                  onClick={() => navigate(-1)}
                >
                  CANCEL
                </button>
                <button type='submit' className='forum-btn btn-blue'>
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
