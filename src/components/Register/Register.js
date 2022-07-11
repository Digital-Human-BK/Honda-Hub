import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import useAuthContext from '../../hooks/useAuthContext';
import { register } from '../../services/authService';
import { validateRegister } from '../../helpers/validator';
import { mapErrors } from '../../helpers/mappers';

const Register = () => {
  const navigate = useNavigate();
  const { onAuth } = useAuthContext();
  const [error, setError] = useState(null);

  const registerHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const username = formData.get('username').trim();
    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();
    const repass = formData.get('repass').trim();

    try {
      setError(null);
      validateRegister({ username, email, password, repass });

      const authData = await register({ username, email, password });
      onAuth(authData);

      ev.target.reset();
      navigate('/');
    } catch (err) {
      const error = mapErrors(err);
      console.log(error);
      setError(error);
    }
  };

  return (
    <section id='register' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>REGISTER</h1>
        {error &&
          <ul className='error-list'>
            {error.map((e, i) => <li key={i}>{e.msg}</li>)}
          </ul>
        }
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
    </section>
  );
};

export default Register;
