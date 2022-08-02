import { useState } from 'react';

import { mapErrors } from '../../../helpers/mappers';
import { validateImageUpload } from '../../../helpers/validators';
import { updateUserImage } from '../../../services/forumService';
import useAuthContext from '../../../hooks/useAuthContext';

import './UserImageUpload.css';
import Modal from '../../Common/Modal';

const UserImageUpload = ({ userData, toggleImageUpload, updateUserData }) => {
  const { onAuth } = useAuthContext();

  const [option, setOption] = useState('image');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUserCtx = (imageUrl) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.imageUrl = imageUrl;
    onAuth(user);
  };

  const handleOptionChange = (ev) => {
    setOption(ev.target.value);
  };

  const fileSelectedHandler = (ev) => {
    setSelectedFile(ev.target.files[0]);
  };

  const uploadImageHandler = async () => {
    const data = new FormData();
    data.append('file', selectedFile);
    data.append('upload_preset', 'honda-hub');

    try {
      setError(null);
      setIsLoading(true);
      validateImageUpload(selectedFile);

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dio4dx3uy/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const file = await res.json();

      const { imageUrl } = await updateUserImage(userData._id, {
        imageUrl: file.secure_url,
      });

      updateUserCtx(file.secure_url);
      updateUserData({ ...userData, imageUrl });
      toggleImageUpload();
    } catch (err) {
      const errors = mapErrors(err);
      console.log(errors);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadLinkHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const imageUrl = formData.get('imageUrl').trim();

    try {
      setError(null);
      setIsLoading(true);

      await updateUserImage(userData._id, { imageUrl });

      updateUserCtx(imageUrl);
      updateUserData({ ...userData, imageUrl });
      toggleImageUpload();
    } catch (err) {
      const errors = mapErrors(err);
      console.log(errors);
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <Modal
      title={'Upload image'}
      isLoading={isLoading}
      error={error}
      toggleHandler={toggleImageUpload}
    >
      <div className='upload-wrapper'>
        <h3 className='upload-options-title'>Please choose desired action:</h3>
        <label className='upload-options'>
          <input
            type='radio'
            name='options'
            value='image'
            checked={option === 'image'}
            onChange={handleOptionChange}
          />{' '}
          Image upload
        </label>
        <br />

        <label className='upload-options'>
          <input
            type='radio'
            name='options'
            value='url'
            checked={option === 'url'}
            onChange={handleOptionChange}
          />{' '}
          Upload via link
        </label>
        <br />

        <label className='upload-options'>
          <input
            type='radio'
            name='options'
            value='remove'
            checked={option === 'remove'}
            onChange={handleOptionChange}
          />{' '}
          Remove image
        </label>
        <br />

        {option === 'image' && (
          <>
            <input
              type='file'
              name='file'
              className='image-upload__btn'
              onChange={fileSelectedHandler}
            />
            <button
              className='forum-btn update-btn medium-btn right-btn'
              onClick={uploadImageHandler}
            >
              <i className='fa-solid fa-cloud-arrow-up' />
              Upload
            </button>
          </>
        )}
        {option === 'url' && (
          <form
            onSubmit={uploadLinkHandler}
            className='forum-inputs'
            method='POST'
          >
            <input
              type='text'
              name='imageUrl'
              className='image-upload__url'
              placeholder='Your image URL'
            />
            <button
              type='submit'
              className='forum-btn update-btn medium-btn right-btn'
            >
              <i className='fa-solid fa-cloud-arrow-up' />
              Upload
            </button>
          </form>
        )}
        {option === 'remove' && (
          <form
            onSubmit={uploadLinkHandler}
            className='forum-inputs'
            method='POST'
          >
            <input
              type='url'
              name='imageUrl'
              className='image-upload__remove'
              defaultValue={
                'https://res.cloudinary.com/dio4dx3uy/image/upload/v1659378780/honda-hub/default-avatar_awawdx.jpg'
              }
            />
            <button
              type='submit'
              className='forum-btn update-btn medium-btn right-btn'
            >
              <i className='fa-solid fa-trash-can' />
              Remove
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default UserImageUpload;
