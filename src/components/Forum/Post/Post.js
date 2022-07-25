import { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuthContext from '../../../hooks/useAuthContext';
import { mapDate } from '../../../helpers/mappers';

import './Post.css';
import DeleteModal from './DeleteModal';
import PostEditView from './PostEditView';
import PostDefaultView from './PostDefaultView';
import LoadingSpinner from '../../Common/LoadingSpinner';

const Post = ({ post, updateCommentsState, updatePostState, quoteCommentState }) => {
  const { user } = useAuthContext();

  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [postedDate, postedTime] = mapDate(post.createdAt);

  const toggleEdit = () => {
    setEditState(prev => !prev);
  }

  const toggleDelete = (ev) => {
    ev.stopPropagation();
    setDeleteState((prev) => !prev);
  };

  const toggleError = (err) => {
    setError(err);
  };

  const toggleLoading = (value) => {
    setIsLoading(value)
  }

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ul className='error-list'>{error.map((e, i) =><li key={i}>{e.msg}</li>)}</ul>}
      {deleteState && (
        <DeleteModal
          post={post}
          toggleError={toggleError}
          toggleDelete={toggleDelete}
          toggleLoading={toggleLoading}
          updateCommentsState={updateCommentsState}
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
        {post.votes > 3 && (
          <div className='popular-flag' title='Popular opinion'>
            <i className='fa-solid fa-heart' />
          </div>
        )}
        <div className='post__content'>
          <p className='post__date'>
            Posted: {postedDate} at {postedTime}
          </p>

          {editState ? (
            <PostEditView 
              post={post} 
              toggleEdit={toggleEdit} 
              toggleError={toggleError} 
              toggleLoading={toggleLoading} 
              updateCommentsState={updateCommentsState}/>
          ) : (
            <PostDefaultView
              post={post}
              userId={user._id}
              toggleEdit={toggleEdit}
              toggleError={toggleError}
              toggleDelete={toggleDelete}
              updatePostState={updatePostState}
              updateCommentsState={updateCommentsState}
              quoteCommentState={quoteCommentState}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
