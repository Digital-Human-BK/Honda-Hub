import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  return (
    <section id='login' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>LOGIN</h1>

        <form className='contact-form'>
          <input
            type='email'
            className='field'
            name='email'
            placeholder='Your Email'
          />
          <input
            type='password'
            className='field'
            name='password'
            placeholder='Your Password'
          />
          <input type='submit' value='Login' className='btn' />
        </form>
        <p className='already'>
          Don't have account?<Link to='/register'> Register here</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
