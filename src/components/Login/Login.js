import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext';
import { login } from '../../services/authService';
import { mapErrors } from '../../helpers/mappers';
import { validateLogin } from '../../helpers/validators';

import './Login.css';
import ErrorList from '../Common/ErrorList';
import LoadingModal from '../Common/LoadingModal';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname + location.state?.from?.search || '/';

  const { onAuth } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim().toLocaleLowerCase();
    const password = formData.get('password').trim();

    try {
      setError(null);
      setIsLoading(true);
      validateLogin({ email, password });

      const authData = await login({ email, password });
      onAuth(authData);

      ev.target.reset();
      navigate(from, { replace: true });
    } catch (err) {
      const error = mapErrors(err);
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='login' className='dark'>
      <div className='auth'>
        <h1 className='auth__title'>LOGIN</h1>
        {isLoading && <LoadingModal/>}
        {error && <ErrorList error={error} />}
        <form className='auth__form' onSubmit={loginHandler}>
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
