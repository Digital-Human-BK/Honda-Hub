import './Button.css';

const Button = ({value, handler, disabled}) => {
  return <button className={disabled ? 'commonBtn disableBtn' : 'commonBtn'} disabled={disabled} onClick={handler}>{value}</button>
};

export default Button;
