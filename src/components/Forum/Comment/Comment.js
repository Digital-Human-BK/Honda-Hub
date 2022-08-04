import { useState } from 'react';

import useAuthContext from '../../../hooks/useAuthContext';
import { createComment, getComments } from '../../../services/forumService';
import { validateComment } from '../../../helpers/validators';
import { mapErrors } from '../../../helpers/mappers';

import './Comment.css';
import ErrorList from '../../Common/ErrorList';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Comment = ({ postId, updateComments, quote }) => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(false);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const text = formData.get('text').trim();
    const author = user._id;

    const data = {
      text,
      quote,
      author,
      postId,
    };

    try {
      setIsLoading(true);
      setError(null);

      validateComment(data);
      await createComment(data);

      const updatedComments = await getComments(postId);
      ev.target.reset();

      updateComments(updatedComments);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorList error={error} />}
      <div id='comment' className='forum-inputs'>
        <div className='post__user'>
          <img
            className='user__avatar'
            src={user.imageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/default-avatar.jpg';
            }}
            alt={'User'}
          />
        </div>
        <form onSubmit={submitHandler} className='comment-form' method='POST'>

          {quote && <div className='quote-text'>{quote}</div>}

          <textarea
            name='text'
            className={`comment-text ${(focused || quote) && 'expand-text'} ${
              quote && 'merge'
            }`}
            placeholder={`Comment here ${user.username}...`}
            onFocus={() => setFocused(true)}
          ></textarea>
          {(focused || quote) && (
            <button
              className='forum-btn btn-blue comment-btn responsive-btn'
              type='submit'
            >
              <i className='fa-solid fa-plus' />
              COMMENT
            </button>
          )}

          <div className='arrow-left'></div>
        </form>
      </div>
    </>
  );
};

export default Comment;
