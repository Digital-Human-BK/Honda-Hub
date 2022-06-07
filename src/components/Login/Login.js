import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const loginHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();

    
  };

  return (
    <section id='login' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>LOGIN</h1>

        <form className='contact-form' onSubmit={loginHandler}>
          <input
            type='email'
            className='field'
            name='email'
            placeholder='Email'
          />
          <input
            type='password'
            className='field'
            name='password'
            placeholder='Password'
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
