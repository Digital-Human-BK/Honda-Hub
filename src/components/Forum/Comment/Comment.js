import { useState } from 'react';

import useAuthContext from '../../../hooks/useAuthContext';
import { createComment, getComments } from '../../../services/forumService';
import { validateComment } from '../../../helpers/validator';

import './Comment.css';
import { mapErrors, shortenQuote } from '../../../helpers/mappers';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Comment = ({ post, updateComments, quote }) => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(false);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const text = formData.get('text').trim();
    const author = user._id;
    const postId = post._id;

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

      const updatedComments = await getComments(post._id);
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
      {error && (
        <ul className='error-list'>
          {error.map((e, i) => (
            <li key={i}>{e.msg}</li>
          ))}
        </ul>
      )}
      <div id='comment' className='forum-inputs'>
        <div className='post__user'>
          <div className='user__avatar-wrapper'>
            <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
          </div>
        </div>
        <form onSubmit={submitHandler} className='comment-form' method='POST'>
          {quote && (
            <textarea
              name='quote'
              defaultValue={shortenQuote(quote)}
              className='quote-text'
              readOnly
            ></textarea>
          )}

          <textarea
            name='text'
            className={
              `comment-text ${(focused || quote) && 'expand-text'} ${
              quote && 'merge'
            }`
            }
            placeholder={`Comment here ${user.username}...`}
            onFocus={() => setFocused(true)}
          ></textarea>
          {(focused || quote) && (
            <button className='forum-btn btn-blue comment-btn' type='submit'>
              <i className='fa-solid fa-plus'></i>
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
