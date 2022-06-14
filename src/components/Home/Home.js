import { Link } from 'react-router-dom';

import './Home.css';
import About from './About';
import Quotes from './Quotes';
import Timeline from './Timeline';
import useAuthContext from '../../hooks/useAuthContext';

const Home = () => {
  const { user } = useAuthContext();

  let greetingMsg = (
    <h1>
      Welcome <span className='greeting-name'>Stranger</span>
    </h1>
  );

  if (user.username) {
    greetingMsg = (
      <h1>
        Welcome <span className='greeting-name'>{user.username}</span>
      </h1>
    );
  }
  return (
    <>
      <section id='home'>
        <div className='inner-width'>
          <div className='content'>
            {greetingMsg}
            <div className='sm'>
              <a
                href='https://github.com/Digital-Human-BK'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa-brands fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/biser-karadzhov-b03594238/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a
                href='https://stackoverflow.com/users/19087435/digital-human'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa-brands fa-stack-overflow'></i>
              </a>
            </div>
            <div className='buttons'>
              <Link to='/catalog'>Catalog</Link>
              <Link to='/forum'>Visit Forum</Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Quotes />
      <Timeline />
    </>
  );
};

export default Home;
