const Footer = () => {
  return (
    <footer>
      <div className='inner-width'>
        <div className='copyright'>
          &copy;
          <a
            href='https://github.com/Digital-Human-BK/Honda-Hub'
            target='_blank'
            rel='noreferrer noopener'
          >
            Honda Hub
          </a>{' '}
          | React project by{' '}
          <a
            href='https://github.com/Digital-Human-BK/Honda-Hub'
            target='_blank'
            rel='noreferrer noopener'
          >
            Biser Karadzhov
          </a>
        </div>
        <div className='sm'>
          <a
            href='https://github.com/Digital-Human-BK'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i className='fa-brands fa-github'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/biser-karadzhov-b03594238/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://stackoverflow.com/users/19087435/digital-human'
            target='_blank'
            rel='noreferrer noopener'
          >
            <i className='fa-brands fa-stack-overflow'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
