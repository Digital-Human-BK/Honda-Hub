import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = ({value}) => {
  const navigate = useNavigate();

  const searchHandler = async (ev) => {
    ev.preventDefault();
    const searchData = new FormData(ev.target);
    const term = searchData.get('search').trim();

    if (!term) {
      ev.target.reset();
      return;
    }
    const encodedTerm = encodeURIComponent(term);
    navigate(`/search?term=${encodedTerm}`);
  };

  return (
    <header className='hero'>
      <h1 className='forum-title'>
        Welcome to the <span className='accent'>Honda Hub Forum</span>
      </h1>
      <form onSubmit={searchHandler} className='search-form' method='GET'>
        <input
          className='search'
          type='search'
          name='search'
          id='search'
          placeholder='Search your topic here'
          defaultValue={value}
        />
        <button className='search-btn'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
