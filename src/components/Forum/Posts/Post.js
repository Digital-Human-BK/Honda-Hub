import { Link } from 'react-router-dom';
import { useState } from 'react';

import { mapDate } from '../../../helpers/mappers';
import useAuthContext from '../../../hooks/useAuthContext';

import './Post.css';

const Post = ({ post }) => {
  const { user } = useAuthContext();
  const [editState, setEditState] = useState(false);

  const [postedDate, postedTime] = mapDate(post.createdAt);
  const [updatedDate, updatedTime] = mapDate(post.updatedAt);

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
            <button
              className='controls-btn edit-btn'
              onClick={() => setEditState((prev) => !prev)}
            >
              <i className='fa-solid fa-pen-to-square'></i> Edit
            </button>

            <button className='controls-btn delete-btn'>
              <i className='fa-solid fa-trash-can'></i> Delete
            </button>
          </>
        ) : (
          <button className='controls-btn'>
            <i className='fa-solid fa-quote-left'></i> Quote
          </button>
        )}
      </div>
    </>
  );

  const editView = (
    <>
      <form method='Post' className='inline-edit'>
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
        <p className='user__posts'>{post.author.posts}</p>
        <p className='user__rides'>Drives: {post.author.drives}</p>
      </div>

      <div className='post__content'>
        <p className='post__date'>
          Posted: {postedDate} at {postedTime}
        </p>
        {editState ? editView : defaultView}
      </div>
    </div>
  );
};

export default Post;
