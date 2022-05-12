import { Link } from 'react-router-dom';

const Register = () => {
  return (
      <section id='register' className='dark'>
        <div className='sign'>
          <h1 className='sign-title'>REGISTER</h1>
          <div className='content'>
            <form className='contact-form'>
              <input
                type='text'
                name='username'
                className='field'
                placeholder='Your Username'
              />
              <input
                type='email'
                name='email'
                className='field'
                placeholder='Your Email'
              />
              <input
                type='password'
                className='halfField'
                name='password'
                placeholder='Your Password'
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
