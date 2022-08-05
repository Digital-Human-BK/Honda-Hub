import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import useAuthContext from '../../hooks/useAuthContext';

import './Navbar.css';

const Navbar = () => {
  const { user, onLogout } = useAuthContext();
  const [navStyle, setNavStyle] = useState('navbar');
  const [active, setActive] = useState(false);

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
      <Link to='/login' onClick={() => setActive(false)}>Login</Link>
      <Link to='/register' onClick={() => setActive(false)}>Register</Link>
    </>
  );

  const userNav = (
    <>
      <Link to={'/profile/' + user._id} onClick={() => setActive(false)}>{user.username}</Link>
      <Link to='/' onClick={onLogout}>Logout</Link>
    </>
  );

  return (
    <nav className={navStyle}>
      <div className='inner-width'>
        <HashLink to='/#home' className='logo'></HashLink>
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`menu-toggler ${active ? 'active' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-menu ${active ? 'active' : ''}`}>
          <HashLink to='/#home' onClick={() => setActive(false)}>Home</HashLink>
          <HashLink to='/#about' onClick={() => setActive(false)}>About</HashLink>
          <HashLink to='/#quotes' onClick={() => setActive(false)}>Quotes</HashLink>
          <HashLink to='/#timeline' onClick={() => setActive(false)}>Timeline</HashLink>
          <Link to='/catalog' onClick={() => setActive(false)}>Catalog</Link>
          <Link to='/forum' onClick={() => setActive(false)}>Forum</Link>
          <span className='divider'></span>
          {user.username ? userNav : guestNav}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
