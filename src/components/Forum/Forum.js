import { Link } from 'react-router-dom';
import './Forum.css';

const Forum = () => {
  return (
    <>
      <header className='hero'>
        <h1 className='forum-title'>
          Welcome to the <span className='accent'>Honda Hub Forum</span>
        </h1>
        <form className='search' method='GET'>
          <input
            className='search-bar'
            type='search'
            name='search-bar'
            id='search-bar'
            placeholder='Search your topic here'
          />
          <button className='search-btn'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </header>
      <section id='forum'>
        <div className='inner-width'>
          <div className='categories-heading'>
            <h2 className='categories-title'>Categories</h2>
            <Link className='new-post-btn' to='/forum/new-post'>
              <i className='fa-solid fa-plus'></i>NEW POST
            </Link>
          </div>
          <ul className='categories'>
            <li className='categories__item'>
              <div className='item__icon'>
                <i className='fa-solid fa-comments'></i>
              </div>
              <div className='item__info'>
                <h3 className='item__title'>General Discussions</h3>
                <p className='item__desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  eos!
                </p>
              </div>
              <div className='item__topics'>
                <p className='topics__count'>07</p>
                <p className='topics__desc'>Topics</p>
              </div>
            </li>
            <li className='categories__item'>
              <div className='item__icon'>
                <i className='fa-solid fa-car-burst'></i>
              </div>
              <div className='item__info'>
                <h3 className='item__title'>Technical Problems and Service</h3>
                <p className='item__desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  eos!
                </p>
              </div>
              <div className='item__topics'>
                <p className='topics__count'>11</p>
                <p className='topics__desc'>Topics</p>
              </div>
            </li>
            <li className='categories__item'>
              <div className='item__icon'>
                <i className='fa-solid fa-flag-checkered'></i>
              </div>
              <div className='item__info'>
                <h3 className='item__title'>Meetings and Events</h3>
                <p className='item__desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  eos!
                </p>
              </div>
              <div className='item__topics'>
                <p className='topics__count'>03</p>
                <p className='topics__desc'>Topics</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Forum;
