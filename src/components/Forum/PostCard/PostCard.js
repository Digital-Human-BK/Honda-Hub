import { Link } from 'react-router-dom';

import { mapCategories, mapDate, mapIcons } from '../../../helpers/mappers';

import './PostCard.css';

const PostCard = ({ data }) => {
  const [date, time] = mapDate(data.createdAt);
  const category = mapCategories(data.category);

  return (
    <li>
      <Link to={`/forum/` + data._id} className='post-card'>
        <div className='post-card__icon'>
          <i className={mapIcons(data.category)}></i>
        </div>
        <div className='post-card__info'>
          <h3 className='post-card__title'>{data.title}</h3>
          <p className='post-card__author'>Author: {data.author.username}</p>
        </div>

        <div className='post-card__side-info'>
          <p className='post-card__category'>Posted in <strong>{category}</strong></p>
          <p className='post-card__created'>Created at: {date}, {time}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
