import { useState } from 'react';
import { mapErrors } from '../../../helpers/mappers';

import { updateUser } from '../../../services/forumService';

import './UserEdit.css';
import Modal from '../../Common/Modal';

const UserEdit = ({ userData, toggleEdit, updateUserData }) => {
  const [error, setError] = useState(null);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const cars = formData.get('cars').trim();
    const sign = formData.get('sign').trim();
    const about = formData.get('about').trim();

    const data = { cars, sign, about };

    try {
      const updatedData = await updateUser(userData._id, data);
      updateUserData({ ...userData, ...updatedData });
      toggleEdit();
    } catch (err) {
      const errors = mapErrors(err);
      console.log(errors);
      setError(errors);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <Modal title={'Edit Profile'} error={error} toggleHandler={toggleEdit}>
        <form
          onSubmit={submitHandler}
          className='user-edit__form forum-inputs'
          method='POST'
        >
          <input
            className='edit-cars'
            type='text'
            name='cars'
            maxLength={60}
            defaultValue={userData.cars}
            placeholder='Your cars'
          />
          <textarea
            className='edit-sign'
            name='sign'
            maxLength={200}
            defaultValue={userData.sign}
            placeholder='Add a sign to your posts'
          ></textarea>
          <textarea
            className='edit-about'
            name='about'
            maxLength={1000}
            defaultValue={userData.about}
            placeholder='Tell others about yourself'
          ></textarea>

          <button
            type='submit'
            className='forum-btn update-btn medium-btn right-btn'
          >
            <i className='fa-solid fa-square-check' />
            Update
          </button>
        </form>
    </Modal>
  );
};

export default UserEdit;
