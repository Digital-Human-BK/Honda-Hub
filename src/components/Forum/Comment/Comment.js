import useAuthContext from '../../../hooks/useAuthContext';

import './Comment.css';

const Comment = ({ post }) => {
  const { user } = useAuthContext();

  const submitHandler = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const text = formData.get('text').trim();
    const author = user._id;
    const postId = post._id;

    try {
      
    } catch (err) {
      
    }
  };

  return (
    <div id='comment'>
      <div className='post__user'>
        <p className='user__username'>Username</p>
        <div className='user__avatar-wrapper'>
          <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
        </div>
      </div>
      <form onSubmit={submitHandler} className='comment-form' method='POST'>
        <label htmlFor='comment-text'>Comment</label>
        <textarea name='text' id='comment-text'></textarea>
        <button className='forum-btn btn-blue comment-btn' type='submit'>
          COMMENT
        </button>

        <div className='arrow-left'></div>
      </form>
    </div>
  );
};

export default Comment;
