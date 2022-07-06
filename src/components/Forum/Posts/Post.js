import { Link } from 'react-router-dom';

import { parseCategory } from '../../../helpers/dataTransform';

import './Post.css';

const Post = ({ data }) => {
  const formatDate = new Date(data.createdAt);
  const date = formatDate.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const time = formatDate.toLocaleTimeString('en-GB');

  const category = parseCategory(data.category);

  return (
    <li>
      <Link to={`/forum/` + data._id} className='post'>
        <div className='post__icon'>
          <i className='fa-solid fa-newspaper'></i>
        </div>
        <div className='post__info'>
          <h3 className='post__title'>{data.title}</h3>
          <p className='post__author'>Author: {data.author.username}</p>
        </div>

        <div className='post__side-info'>
          <p className='post__category'>Posted in {category}</p>
          <p className='post__created'>Created at: {date}, {time}</p>
        </div>
      </Link>
    </li>
  );
};

export default Post;
