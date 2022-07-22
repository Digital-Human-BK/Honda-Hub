import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { formatQuote, mapDate, mapErrors } from '../../../../helpers/mappers';
import {
  getPost,
  getComments,
  voteForPost,
  voteForComment,
} from '../../../../services/forumService';

const PostDefaultView = ({
  post,
  userId,
  updatePostState,
  updateCommentsState,
  quoteCommentState,
  toggleEdit,
  toggleError,
  toggleDelete,
}) => {
  const navigate = useNavigate();
  
  const [updatedDate, updatedTime] = mapDate(post.updatedAt);

  const editHandler = () => {
    if (post.title) {
      navigate('/forum/edit-post/' + post._id);
      return;
    }
    toggleEdit((prev) => !prev);
  };

  const quoteHandler = () => {
    const quote = formatQuote(
      post.text,
      post.author.username,
      updatedDate,
      updatedTime
    );
    quoteCommentState(quote);
  };

  const voteHandler = async (value) => {
    const postId = post._id;
    const authorId = post.author._id;
    try {
      toggleError(null);
      if (post.title) {
        await voteForPost(postId, { userId, authorId, value });
        const updatedPost = await getPost(post._id);
        updatePostState(updatedPost);
      } else {
        await voteForComment(postId, { userId, authorId, value });
        const comments = await getComments(post.postId);
        updateCommentsState(comments);
      }
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      toggleError(errors);
    }
  };

  return (
    <>
      {post.quote && <p className='post__quote'>{post.quote}</p>}
      <p className='post__text'>{post.text}</p>
      {post.updated && (
        <p className='post__update-date'>
          Updated: {updatedDate} at {updatedTime}
        </p>
      )}
      <div className='post__controls'>
        {userId === post.author._id ? (
          <>
            <button className='controls-btn edit-btn' onClick={editHandler}>
              <i className='fa-solid fa-pen-to-square' /> Edit
            </button>

            <button className='controls-btn delete-btn' onClick={toggleDelete}>
              <i className='fa-solid fa-trash-can' /> Delete
            </button>

            <div className='votes-wrapper'>
              <span className='votes votes__title'>Rating:</span>
              <span
                className={`votes ${
                  post.votes > 0 ? 'votes__up' : 'votes__down'
                } ${post.votes === 0 ? 'votes__neutral' : ''}`}
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

            {post.voters.includes(userId) && (
              <div className='votes-wrapper'>
                <span className='votes votes__title'>Rating:</span>
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

            {post.voters.includes(userId) === false && (
              <div className='vote'>
                <button
                  className='vote__btn down'
                  onClick={() => voteHandler(-1)}
                  title='Down Vote'
                >
                  <i className='fa-solid fa-minus' />
                </button>
                
                <span>{post.votes}</span>

                <button
                  className='vote__btn up'
                  onClick={() => voteHandler(1)}
                  title='Up Vote'
                >
                  <i className='fa-solid fa-plus' />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PostDefaultView;
