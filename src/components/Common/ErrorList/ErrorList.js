import './ErrorList.css';

const ErrorList = ({error, classes}) => {
  return (
    <ul className={`error-list ${classes || ''}`}>
      {error.map((err, i) => <li key={i}>{err.msg}</li>)}
    </ul>
  );
};

export default ErrorList;
