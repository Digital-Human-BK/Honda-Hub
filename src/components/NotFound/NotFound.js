import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  return (
    <section id='not-found'>
      <div className='inner-width'>
        <div className='content'>
          <h1>404</h1>
          <p>This page does not exist</p>
          <div className='buttons'>
            <Link to='/'>Go Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
