import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Login.css';
import useAuthContext from '../../hooks/useAuthContext';
import { login } from '../../services/authService';
import { validateLogin } from '../../helpers/validator';
import { mapErrors } from '../../helpers/mappers';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state?.from?.pathname + location.state?.from?.search) || '/';

  const { onAuth } = useAuthContext();
  const [error, setError] = useState(null);

  const loginHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();

    try {
      setError(null);
      validateLogin({ email, password });

      const authData = await login({ email, password });
      onAuth(authData);

      ev.target.reset();
      navigate(from, { replace: true });
    } catch (err) {
      const error = mapErrors(err);
      console.log(error);
      setError(error);
    }
  };

  return (
    <section id='login' className='dark'>
      <div className='sign'>
        <h1 className='sign-title'>LOGIN</h1>
        { error &&
          <ul className='error-list'>
            {error.map((e, i) => <li key={i}>{e.msg}</li>)}
          </ul>
        }
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
