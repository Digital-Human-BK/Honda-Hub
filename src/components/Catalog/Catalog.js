import Header from "../Header";

const Catalog = () => {
  return (
    <>
    <Header/>
    <section id='catalog'>
      <div className='inner-width'>
        <h1 className='section-title'>Famous Models</h1>
        <div className='quotes'>
          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “Success represents the 1% of your work which results from the 99%
              of failure”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “We only have one future, and it will be made of our dreams, if we
              have the courage to challenge convention.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p> “When you fail, you also learn how not to fail.” </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “My biggest thrill is when I plan something and it fails. My mind
              is then filled with ideas on how I can improve it.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “Instead of being afraid of the challenge and failure, be afraid
              of avoiding the challenge and doing nothing.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “The value of life can be measured by how many times your soul has
              been deeply stirred.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p> “The day I stop dreaming is the day I die.” </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “Enjoying your work is essential. If your work becomes an
              expression of your own ideas, you will surely enjoy it.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>

          <div className='quote'>
            <i className='fas fa-award'></i>
            <p>
              “Real happiness lies in the completion of work using your own
              brains and skills.”
            </p>
            <h4>~Soichiro Honda</h4>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Catalog;