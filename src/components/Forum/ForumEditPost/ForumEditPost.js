import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useAuthContext from '../../../hooks/useAuthContext';
import { getPost, updatePost } from '../../../services/forumService';

import './ForumEditPost.css';
import DarkHeader from '../../Common/DarkHeader';
import LoadingSpinner from '../../Common/LoadingSpinner';
import { mapErrors } from '../../../helpers/mappers';
import Error from '../../Error';

const ForumEditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title').trim();
    const text = formData.get('text').trim();

    const data = { title, text };

    try {
      setIsLoading(true);
      setError(null);
      const updatedPost = await updatePost(id, data);
      console.log(updatedPost);
      navigate('/forum/' + id);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const post = await getPost(id);
        console.log(post);
        setPost(post);
      } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        setError(errors);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if(!isLoading && user._id !== post.author._id) {
    return <Error>Unauthorized</Error>
  }

  return (
    <>
      <DarkHeader />
      <section id='new-post'>
        <div className='inner-width'>
          <h1 className='section-title'>Edit Post</h1>

          {error && (
            <ul className='error-list large'>
              {error && error.map((e, i) => <li key={i}>{e.msg}</li>)}
            </ul>
          )}
          {isLoading && <LoadingSpinner />}

          <form
            className='post-form forum-inputs edit-form'
            onSubmit={submitHandler}
            method='POST'
          >
            <div className='post-form__inputs'>
              <input
                type='text'
                className='form-title'
                name='title'
                maxLength='80'
                placeholder='Edit Title'
                defaultValue={post && post.title}
              />

              <textarea
                name='text'
                className='form-text'
                maxLength='2000'
                placeholder='Edit Content'
                defaultValue={post && post.text}
              ></textarea>

              <div className='form-buttons edit__form-buttons'>
                <button
                  type='button'
                  className='forum-btn btn-cancel'
                  onClick={() => navigate(-1)}
                >
                  CANCEL
                </button>
                <button type='submit' className='forum-btn btn-blue'>
                  UPDATE
                </button>
              </div>
            </div>
            <div className='edit-form__img'></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForumEditPost;
