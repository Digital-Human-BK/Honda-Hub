import { useState } from 'react';

import './UserHeader.css';
import UserEdit from '../UserEdit';
import UserImageUpload from '../UserImageUpload';

const UserHeader = ({ isOwner, userData, updateUserData }) => {
  const [editState, setEditState] = useState(false);
  const [imgUploadState, setImgUploadState] = useState(false);

  const toggleEdit = () => {
    setEditState((prev) => !prev);
  };

  const toggleImageUpload = () => {
    setImgUploadState((prev) => !prev);
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
      {imgUploadState && (
        <UserImageUpload
          userData={userData}
          toggleImageUpload={toggleImageUpload}
          updateUserData={updateUserData}
        />
      )}
      <img className='profile-hero' src='/img/hero-nsx-user.jpg' alt='cover img' />
      <div className='user-info-bar'>
        <div className='inner-width-bar'>
          <div className='user-avatar__wrapper'>
            <img
              className='user-img'
              src={userData.imageUrl}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/img/default-avatar.jpg';
              }}
              alt={'User'}
            />
            {isOwner && (
              <button
                onClick={toggleImageUpload}
                className='user-upload-img'
                title='Upload image'
              >
                <i className='fa-solid fa-camera' />
              </button>
            )}
          </div>
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
