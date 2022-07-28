import { mapDate } from '../../../helpers/mappers';

import './UserInfo.css';

const UserInfo = ({ userData }) => {
  const [date] = mapDate(userData.registeredOn);

  return (
    <div className='user-info card'>
      <h2 className='user-info__heading'>
        <i className='fa-solid fa-circle-info' /> About
      </h2>
      <ul className='user-info__stats'>
        <li className='info-stats'>
          <p className='stats__title'>Posts</p>
          <p className='stats__value'>{userData.posts}</p>
        </li>
        <li className='info-stats'>
          <p className='stats__title'>Role</p>
          <p className='stats__value'>{userData.role}</p>
        </li>
        <li className='info-stats'>
          <p className='stats__title'>Rank</p>
          <p className='stats__value'>{userData.rank}</p>
        </li>
        <li className='info-stats'>
          <p className='stats__title'>Registered</p>
          <p className='stats__value'>{date}</p>
        </li>
      </ul>
      <p className='user-info__details'>
        <span className='details__title'>Cars: </span>
        <span className='details__value'>
          {userData.cars || 'Tell everyone what honda you got in the garage'}
        </span>
      </p>
      <p className='user-info__details'>
        <span className='details__title'>Sign: </span>
        <span className='details__value'>
          {userData.sign || 'Add a sign that appears under every of your posts'}
        </span>
      </p>
      <p className='user-info__details'>
        <span className='details__title'>About me: </span>
        <span className='details__value'>
          {userData.about || 'Tell others a bit about yourself'}
        </span>
      </p>
      <h2 className='user-info__reputation'>
        Reputation level: {userData.reputation}
      </h2>
    </div>
  );
};

export default UserInfo;
