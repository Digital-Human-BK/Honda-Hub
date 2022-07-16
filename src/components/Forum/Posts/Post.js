import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { mapDate, mapErrors } from '../../../helpers/mappers';
import useAuthContext from '../../../hooks/useAuthContext';

import './Post.css';
import { validateComment } from '../../../helpers/validator';
import {
  deleteComments,
  deletePost,
  deleteComment,
  getComments,
  updateComment,
} from '../../../services/forumService';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Post = ({ post, updateComments }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [editState, setEditState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [postedDate, postedTime] = mapDate(post.createdAt);
  const [updatedDate, updatedTime] = mapDate(post.updatedAt);

  const editHandler = () => {
    if (post.title) {
      navigate('/forum/edit-post/' + post._id);
      return;
    }
    setEditState((prev) => !prev);
  };

  const updateHandler = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const text = formData.get('text').trim();

    try {
      setIsLoading(true);
      setError(null);

      validateComment({ text });
      await updateComment(post._id, { text });

      const updatedComments = await getComments(post.postId);
      setEditState((prev) => !prev);
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

  const deleteHandler = () => {
    if (post.title) {
      deletePostAndComments();
    } else {
      deleteCommentOnly();
    }
  };

  const deletePostAndComments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await Promise.all([deletePost(post._id), deleteComments(post._id)]);
      navigate('/forum');
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCommentOnly = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await deleteComment(post._id);
      const comments = await getComments(post.postId);
      updateComments(comments);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultView = (
    <>
      <p className='post__text'>{post.text}</p>
      {postedTime !== updatedTime && (
        <p className='post__update-date'>
          Updated: {updatedDate} at {updatedTime}
        </p>
      )}
      <div className='post__controls'>
        {user._id === post.author._id ? (
          <>
            <button className='controls-btn edit-btn' onClick={editHandler}>
              <i className='fa-solid fa-pen-to-square'></i> Edit
            </button>

            <button className='controls-btn delete-btn' onClick={deleteHandler}>
              <i className='fa-solid fa-trash-can'></i> Delete
            </button>
          </>
        ) : (
          <>
            <button className='controls-btn'>
              <i className='fa-solid fa-quote-left'></i> Quote
            </button>

            <button className='controls-btn heat-btn'>
            <i className="fa-solid fa-fire-flame-curved"></i> Heat Up
            </button>
          </>
        )}
      </div>
    </>
  );

  const editView = (
    <>
      <form method='Post' className='inline-edit' onSubmit={updateHandler}>
        <textarea
          name='text'
          className='inline-edit__area'
          maxLength='1000'
          defaultValue={post.text}
        ></textarea>
        <div className='form-buttons'>
          <button
            type='button'
            className='forum-btn btn-cancel'
            onClick={() => setEditState((prev) => !prev)}
          >
            <i className='fa-solid fa-rectangle-xmark'></i>CANCEL
          </button>
          <button type='submit' className='forum-btn update-btn'>
            <i className='fa-solid fa-square-check'></i>UPDATE
          </button>
        </div>
      </form>
    </>
  );

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
      <div className='post'>
        <div className='post__user'>
          <Link to='/' className='user__username'>
            {post.author.username}
          </Link>
          <p className='user__role'>{post.author.role}</p>
          <div className='user__avatar-wrapper'>
            <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
          </div>
          <p className='user__level'>{post.author.rank}</p>
          <button className='user__respect positive'>
            <i className='fa-solid fa-circle-plus'></i> {post.author.reputation}
          </button>
          <p className='user__posts'>Posts: {post.author.posts}</p>
          <p className='user__rides'>Drives: {post.author.drives}</p>
        </div>

        <div className='post__content'>
          <p className='post__date'>
            Posted: {postedDate} at {postedTime}
          </p>
          {editState ? editView : defaultView}
        </div>
      </div>
    </>
  );
};

export default Post;
