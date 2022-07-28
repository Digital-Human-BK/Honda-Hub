import { Link } from 'react-router-dom';
import PostCard from '../../Forum/PostCard';

import './UserPosts.css';

const UserPosts = ({ posts, isOwner }) => {
  return (
    <div className='user-posts card'>
      <h2 className='user-posts__title'>
        {isOwner ? 'Your Posts ' : 'User Posts '}
        <i className='fa-solid fa-angle-down' />
      </h2>
      {posts.length === 0 && (
        <div className='user-posts__no-posts'>
          <p className='no-posts__title'>You don't have any posts yet.</p>
          <Link className='no-posts__link' to='/forum/new-post'>
            Create your first one here
          </Link>
        </div>
      )}
      <ul className='user-posts__list'>
        {posts.map((postData) => (
          <PostCard key={postData._id} data={postData} />
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
