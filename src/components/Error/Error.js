import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({ children }) => {
  return (
    <section id='error-page'>
      <div className='inner-width'>
        <div className='content'>
          <h1>{children}</h1>
          <div className='buttons'>
            <Link to='/'>Go Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
