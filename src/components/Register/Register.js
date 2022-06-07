import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
  const registerHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const username = formData.get('username').trim();
    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();

    
  };

  return (
    <section id='register' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>REGISTER</h1>
        <div className='content'>
          <form className='contact-form' onSubmit={registerHandler}>
            <input
              required
              type='text'
              name='username'
              className='field'
              placeholder='Username'
            />
            <input
              required
              type='email'
              name='email'
              className='field'
              placeholder='Email'
            />
            <input
              required
              type='password'
              className='halfField'
              name='password'
              placeholder='Password'
            />
            <input
              required
              type='password'
              className='halfField'
              name='repass'
              placeholder='Repeat Password'
            />
            <input type='submit' value='Register' className='btn' />
          </form>
          <p className='already'>
            Already registered?<Link to='/login'> Login here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
