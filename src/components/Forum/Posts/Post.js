import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useNavigate } from 'react-router-dom';

import useAuthContext from '../../../hooks/useAuthContext';
import { formatQuote, mapDate, mapErrors } from '../../../helpers/mappers';
import { validateComment } from '../../../helpers/validator';
import {
  deleteComments,
  deletePost,
  deleteComment,
  getComments,
  updateComment,
  voteForPost,
  voteForComment,
  getPost,
} from '../../../services/forumService';

import './Post.css';
import DeleteModal from '../../Common/DeleteModal';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Post = ({ post, updateComments, updatePost, quoteComment }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
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

  const cancelDelete = () => {
    setDeleteState(false);
  };

  const quoteHandler = () => {
    const quote = formatQuote(
      post.text,
      post.author.username,
      updatedDate,
      updatedTime
    );
    quoteComment(quote);
  };

  const voteHandler = async (value) => {
    const postId = post._id;
    const userId = user._id;
    const authorId = post.author._id;
    try {
      setError(null);
      if (post.title) {
        await voteForPost(postId, { userId, authorId, value });
        const updatedPost = await getPost(post._id);
        updatePost(updatedPost);
      } else {
        await voteForComment(postId, { userId, authorId, value });
        const comments = await getComments(post.postId);
        updateComments(comments);
      }
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      setError(errors);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  const defaultView = (
    <>
      {post.quote && <p className='post__quote'>{post.quote}</p>}
      <p className='post__text'>{post.text}</p>
      {post.updated && (
        <p className='post__update-date'>
          Updated: {updatedDate} at {updatedTime}
        </p>
      )}
      <div className='post__controls'>
        {user._id === post.author._id ? (
          <>
            <button className='controls-btn edit-btn' onClick={editHandler}>
              <i className='fa-solid fa-pen-to-square' /> Edit
            </button>

            <button
              className='controls-btn delete-btn'
              onClick={() => setDeleteState(true)}
            >
              <i className='fa-solid fa-trash-can' /> Delete
            </button>

            <div className='votes-wrapper'>
              <span className='votes votes__title'>Votes:</span>
              <span
                className={`votes  
                ${post.votes > 0 ? 'votes__up' : 'votes__down'}
                ${post.votes === 0 ? 'votes__neutral' : ''}
                `}
              >
                {post.votes > 0 ? `+${post.votes}` : post.votes}
              </span>
            </div>
          </>
        ) : (
          <>
            <HashLink
              to='#comment'
              className='controls-btn'
              onClick={quoteHandler}
            >
              <i className='fa-solid fa-quote-left' /> Quote
            </HashLink>

            {post.voters.includes(user._id) && (
              <div className='votes-wrapper'>
                <span className='votes votes__title'>Votes:</span>
                <span
                  className={`votes  
                ${post.votes > 0 ? 'votes__up' : 'votes__down'}
                ${post.votes === 0 ? 'votes__neutral' : ''}
                `}
                >
                  {post.votes > 0 ? `+${post.votes}` : post.votes}
                </span>
              </div>
            )}

            {post.voters.includes(user._id) === false && (
              <div className='vote'>
                <button
                  className='vote__btn up'
                  onClick={() => voteHandler(1)}
                  title='Up Vote'
                >
                  <i className='fa-solid fa-plus' />
                </button>

                <span className='temperature'>{post.votes}</span>

                <button
                  className='vote__btn down'
                  onClick={() => voteHandler(-1)}
                  title='Down Vote'
                >
                  <i className='fa-solid fa-minus' />
                </button>
              </div>
            )}
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
            <i className='fa-solid fa-rectangle-xmark' />
            CANCEL
          </button>
          <button type='submit' className='forum-btn update-btn'>
            <i className='fa-solid fa-square-check' />
            UPDATE
          </button>
        </div>
      </form>
    </>
  );
  console.log(post.author.reputation);

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
      {deleteState && (
        <DeleteModal
          deleteHandler={deleteHandler}
          cancelDelete={cancelDelete}
        />
      )}
      <div className='post'>
        <div className='post__user'>
          <Link
            to='/'
            className='user__username'
            title='View User&lsquo;s profile'
          >
            {post.author.username}
          </Link>
          <p className='user__role'>{post.author.role}</p>
          <div className='user__avatar-wrapper'>
            <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
          </div>
          <p className='user__level' title='Rank depends on posts count'>
            {post.author.rank}
          </p>
          <button
            className={`user__reputation ${
              post.author.reputation > 0 ? 'positive' : ''
            }`}
            title='User&lsquo;s reputation level'
          >
            {post.author.reputation > 0 && (
              <i className='fa-solid fa-circle-plus' />
            )}{' '}
            {post.author.reputation}
          </button>
          <p className='user__posts'>Posts: {post.author.posts}</p>
          <p className='user__rides' title='Tell others what vehicles you got'>
            Drives: {post.author.drives}
          </p>
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
