import { Link } from 'react-router-dom';

import { mapCategories, mapDate, mapIcons } from '../../../helpers/mappers';

import './PostHeader.css';

const PostHeader = ({ post, comments }) => {
  const [date] = mapDate(post.createdAt);
  const icon = mapIcons(post.category);
  const category = mapCategories(post.category);

  return (
    <div className='post-header'>
      <div className='post-header__info'>
        <div className='post-header__comments'>
          <p className='comments-count'>{comments}</p>
          <p className='comments-title'>COMMENTS</p>
        </div>

        <div className='post-header__wrapper'>
          <h2 className='post-header__title'>{post.title}</h2>
          <ul className='post-header__desc'>
            <li>
              <span className='post-header__detail'>Author:</span>
              <Link
                to={'/profile/' + post.author._id}
                className='post-header__author'
              >
                {' '}
                {post.author.username},
              </Link>
            </li>
            <li>
              <span className='post-header__detail'>Posted:</span>
              <span className='post-header__date'> {date}</span>
            </li>
            <li>
            <span className='post-header__detail'>in</span>              
              <Link
                to={'/categories/' + post.category}
                className='post-header__category'
              >
                {' '}
                {category}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='post-header__icon'>
        <i className={icon} />
      </div>
    </div>
  );
};

export default PostHeader;
