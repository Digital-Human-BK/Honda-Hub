import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
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
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
