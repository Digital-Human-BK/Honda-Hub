import './Notification.css';

const Notification = ({ children }) => {
  return (
    <div className='inline-notification'>
      <i className='fa-solid fa-triangle-exclamation'></i>
      <h4>{children}</h4>
    </div>
  );
};

export default Notification;
