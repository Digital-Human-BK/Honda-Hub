import { Link } from 'react-router-dom';

import Header from '../Header';

const Login = () => {
  return (
    <>
      <Header />
      <section id='login'>
        <div className='inner-width'>
          <h1 className='section-title'>LOGIN</h1>
          
            <form action='POST' class='contact-form'>
              <input
                type='email'
                class='emailField'
                name='email'
                placeholder='Your Email'
              />
              <input
                type='password'
                class='passwordField'
                name='password'
                placeholder='Your Password'
              />
              <input type='submit' value='Login' class='btn' />
            </form>
            <p className='already'>
              Don't have account?<Link to='/register'> Register here</Link>
            </p>
          
        </div>
      </section>
    </>
  );
};

export default Login;
