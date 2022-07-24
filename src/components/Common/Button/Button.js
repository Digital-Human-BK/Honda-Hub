import './Button.css';

const Button = ({ value, handler, disabled }) => {
  return (
    <button
      className={disabled ? 'common-btn disable-btn' : 'common-btn'}
      disabled={disabled}
      onClick={handler}
    >
      <i className='fa-solid fa-angle-down'/> {value}
    </button>
  );
};

export default Button;
