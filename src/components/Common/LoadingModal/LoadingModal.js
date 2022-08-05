import './LoadingModal.css';
import LoadingSpinner from '../LoadingSpinner';

const LoadingModal = () => {
  return (
    <div className='loading-backdrop'>
      <div className='loading-modal'>
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default LoadingModal;
