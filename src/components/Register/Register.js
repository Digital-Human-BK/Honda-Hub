import { Link } from 'react-router-dom';
import Header from '../Header';

const Register = () => {
  return (
    <>
      <Header />
      <section>
        <div className='inner-width'>
          <h1 className='section-title'>REGISTER</h1>
          <div className='content'>
            <form action='POST' class='contact-form'>
              <input
                type='text'
                class='nameField'
                name='username'
                placeholder='Your Username'
              />
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
              <input
                type='password'
                class='passwordField'
                name='repass'
                placeholder='Repeat Password'
              />
              <input type='submit' value='Register' class='btn' />
            </form>
            <p className='already'>
              Already registered?<Link to='/login'> Login here</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
