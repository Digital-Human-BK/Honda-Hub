import './Forum.css';

const Forum = () => {
  return (
    <>
      <header className='hero'>
        <h1 className='forum-title'>
          Welcome to the <span className='accent'>Honda Hub Forum</span>
        </h1>
        <form className="search" method='GET'>
          <input
            className='search-bar'
            type='search'
            name='search-bar'
            id='search-bar'
            placeholder='Search your topic here'
          />
          <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
          
        </form>
      </header>
      <section id='catalog'>
        <div className='inner-width'></div>
      </section>
    </>
  );
};

export default Forum;
