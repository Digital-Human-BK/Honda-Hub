import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import useAuthContext from '../../hooks/useAuthContext';
import { register } from '../../services/authService';
import { validateRegister } from '../../helpers/validator';

const Register = () => {
  const navigate = useNavigate();
  const { onSign } = useAuthContext();
  const [error, setError] = useState(null);

  const registerHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const username = formData.get('username').trim();
    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();
    const repass = formData.get('password').trim();

    try {
      setError(null);
      validateRegister({ username, email, password, repass });
      const authData = await register({ username, email, password });
      onSign(authData);
      navigate('/');
      ev.target.reset();
    } catch (err) {
      console.log(err.message);
      setError(err);
    }
  };

  return (
    <section id='register' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>REGISTER</h1>
        <div className='content'>
          <ul className='auth-error'>
            {error && error.map((e, i) => <li key={i}>{e.msg}</li>)}
          </ul>
          <form className='contact-form' onSubmit={registerHandler}>
            <input
              type='text'
              name='username'
              className='field'
              placeholder='Username'
            />
            <input
              type='email'
              name='email'
              className='field'
              placeholder='Email'
            />
            <input
              type='password'
              className='halfField'
              name='password'
              placeholder='Password'
            />
            <input
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
