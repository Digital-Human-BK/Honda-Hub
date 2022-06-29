import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuthContext from '../../hooks/useAuthContext';

import './Navbar.css';

const Navbar = () => {
  const { user, onLogout } = useAuthContext();
  const [navStyle, setNavStyle] = useState('navbar');

  const navbarChange = () => {
    if (window.scrollY > 20) {
      setNavStyle('navbar sticky');
    } else {
      setNavStyle('navbar');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarChange);
    return () => window.removeEventListener('scroll', navbarChange);
  }, []);

  const guestNav = (
    <>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </>
  );

  const userNav = (
    <>
      <Link to='/profile'><i className="fa-solid fa-user-ninja"></i> {user.username}</Link>
      <Link to='#' onClick={onLogout}>Logout</Link>
    </>
  );

  return (
    <nav className={navStyle}>
      <div className='inner-width'>
        <HashLink to='/#home' className='logo'></HashLink>
        <button className='menu-toggler active'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className='navbar-menu active'>
          <HashLink to='/#home'>Home</HashLink>
          <HashLink to='/#about'>About</HashLink>
          <HashLink to='/#quotes'>Quotes</HashLink>
          <HashLink to='/#timeline'>Timeline</HashLink>
          <Link to='/catalog'>Catalog</Link>
          <Link to='/forum'>Forum</Link>
          <span className='divider'></span>
          {user.username ? userNav : guestNav}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
