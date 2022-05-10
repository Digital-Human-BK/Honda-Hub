const Home = () => {
  return (
    <section id='home'>
      <div className='inner-width'>
        <div className='content'>
          <h1></h1>
          <div className='sm'>  
            <a
              href='https://github.com/Digital-Human-BK'
              target='_blank'
              className='fa-brands fa-github'
            ></a>
            <a
              href='https://www.linkedin.com/in/biser-karadzhov-b03594238/'
              target='_blank'
              className='fab fa-linkedin'
            ></a>
            <a
              href='https://stackoverflow.com/users/19087435/digital-human'
              target='_blank'
              className='fa-brands fa-stack-overflow'
            ></a>
          </div>
          <div className='buttons'>
            <a href='#contact'>Contact Me</a>
            <a
              href='https://astrumpeople.com/soichiro-honda-biography-a-great-history-of-japanese-car-manufacturer/'
              target='_blank'
            >
              Visit Forum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
