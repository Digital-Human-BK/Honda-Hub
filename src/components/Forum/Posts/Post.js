import { Link } from 'react-router-dom';

import { mapDate } from '../../../helpers/mappers';

import './Post.css';

const Post = ({ post }) => {
  const { date, time } = mapDate(post.createdAt);

  return (
    <div className='post'>
      <div className='post__user'>
        <Link to='/' className='user__username'>{post.author.username}</Link>
        <p className='user__role'>{post.author.role}</p>
        <div className='user__avatar-wrapper'>
          <img className='user__avatar' src='/img/avatar.png' alt='avatar' />
        </div>
        <p className='user__level'>{post.author.rank}</p>
        <button className='user__respect positive'>
          <i className='fa-solid fa-circle-plus'></i> {post.author.reputation}
        </button>
        <p className='user__posts'>{post.author.posts}</p>
        {post.author.drives && <p className='user__rides'>Drives: {post.author.drives}</p>}
      </div>
      <div className='post__content'>
        <p className='post__date'>
          Posted: {date} at {time}
        </p>
        <p className='post__text'>{post.text}</p>
      </div>
    </div>
  );
};

export default Post;
