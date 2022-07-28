import { useState } from 'react';

import './UserHeader.css';
import UserEdit from '../UserEdit';

const UserHeader = ({ isOwner, userData, updateUserData }) => {
  const [editState, setEditState] = useState(false);

  const toggleEdit = () => {
    setEditState((prev) => !prev);
  };

  return (
    <header className='profile-header'>
      {editState && (
        <UserEdit
          userData={userData}
          toggleEdit={toggleEdit}
          updateUserData={updateUserData}
        />
      )}
      <img
        className='profile-hero'
        src='/img/user-cover.jpg'
        alt='cover img'
      />
      <div className='user-info-bar'>
        <div className='inner-width-bar'>
          <img
            className='user-img'
            src='/img/itachi.jpg'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/noImg.jpg';
            }}
            alt={'User'}
          />
          <h1 className='user-username'>{userData.username}</h1>
          {isOwner && (
            <button onClick={toggleEdit} className='edit-profile-btn'>
              <i className='fa-solid fa-pen-to-square' /> Edit
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
