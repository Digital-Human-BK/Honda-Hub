import { useEffect, useState } from 'react';

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
        <a href='#home' className='logo'></a>
        <button className='menu-toggler active'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className='navbar-menu active'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#quotes'>Quotes</a>
          <a href='#education'>Timeline</a>
          <a href='#works'>Works</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
