import './DeleteModal.css';

const DeleteModal = ({deleteHandler, cancelDelete}) => {
  return (
    <div className='overlay' onClick={cancelDelete}>
      <div className='modal'>
        <i className='fa-solid fa-triangle-exclamation'></i>
        <h3 className='warning'>You are about to delete this post!</h3>
        <p className='warning__desc'>
          Deleting will permanently remove the post from database.
        </p>
        <div className='delete-controls'>
          <button className='controls-btn cancel-del' onClick={cancelDelete}>
            <i className='fa-solid fa-circle-xmark'></i> Cancel
          </button>
          <button className='controls-btn delete-btn' onClick={deleteHandler}>
            <i className='fa-solid fa-trash-can'></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
