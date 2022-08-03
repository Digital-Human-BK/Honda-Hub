import './Modal.css';
import ErrorList from '../ErrorList';
import LoadingSpinner from '../LoadingSpinner';

const Modal = ({ children, title, isLoading, error, toggleHandler }) => {
  const isDelModal = title === 'Delete Post';
  const icon = isDelModal ? (
      <i className='fa-solid fa-trash-can' />
    ) : (
      <i className='fa-solid fa-pen-to-square' />
    );

  return (
    <>
      <div className='backdrop' onClick={toggleHandler} />
      <div className={`modal ${isDelModal ? 'delete-modal' : 'profile-modal'}`}>
        <div className='modal__header'>

          <h2 className='modal__title'>{icon} {title}</h2>

          <button className='modal__cancel-btn' onClick={toggleHandler}>
            <i className='fa-solid fa-x' />
          </button>
        </div>
        {isLoading && <LoadingSpinner />}
        {error && <ErrorList error={error} classes={'no-border'}/>}
        {children}
      </div>
    </>
  );
};

export default Modal;
