import { useState } from 'react';

import useAuthContext from '../../../hooks/useAuthContext';
import { createComment, getComments } from '../../../services/forumService';
import { validateComment } from '../../../helpers/validator';

import './Comment.css';
import { mapErrors } from '../../../helpers/mappers';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Comment = ({ post, updateComments }) => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const text = formData.get('text').trim();
    const author = user._id;
    const postId = post._id;

    const data = {
      text,
      author,
      postId,
    };

    try {
      setIsLoading(true);
      setError(null);

      validateComment(data);
      await createComment(data);

      const updatedComments = await getComments(post._id);
      updateComments(updatedComments);

      ev.target.reset();
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
    {isLoading && <LoadingSpinner/>}
    {error &&
     <ul className='error-list'>
        {error.map((e, i) => <li key={i}>{e.msg}</li>)}
      </ul>
    }
    <div id='comment'>
      <div className='post__user'>
        <p className='comment-username'>Username</p>
        <div className='user__avatar-wrapper'>
          <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
        </div>
      </div>
      <form onSubmit={submitHandler} className='comment-form' method='POST'>
        <p className='comment-text'>Comment</p>
        <textarea name='text' id='comment-text' ></textarea>
        <button className='forum-btn btn-blue comment-btn' type='submit'>
          COMMENT
        </button>

        <div className='arrow-left'></div>
      </form>
    </div>
    </>
  );
};

export default Comment;
