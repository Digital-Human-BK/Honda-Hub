import './About.css';

const About = () => {
  return (
    <section id='about'>
      <div className='inner-width'>
        <h1 className='section-title'>About</h1>
        <div className='about-content'>
          <img src='/img/sh.jpg' className='about-pic' alt='Soichiro Honda' />
          <div className='about-text'>
            <h2>Who is Soichiro Honda?</h2>
            <br />
            <h3>
              <span>Dreamer</span>
              <span>Innovator</span>
              <span>Enthusiast</span>
            </h3>
            <p>
              Soichiro Honda (Honda Sōichirō, 17 November 1906 - 5 August 1991)
              was a Japanese engineer and industrialist. In 1948, he established
              Honda Motor Co., Ltd. and oversaw its expansion from a wooden
              shack manufacturing bicycle motors to a multinational automobile
              and motorcycle manufacturer.
              <br />
              <br />
              Honda has been the world's largest motorcycle manufacturer since
              1959, reaching a production of 400 million by the end of 2019, as
              well as the world's largest manufacturer of internal combustion
              engines measured by volume, producing more than 14 million
              internal combustion engines each year. Honda became the
              second-largest Japanese automobile manufacturer in 2001. Honda was
              the eighth largest automobile manufacturer in the world in 2015.
              <br />
              <br />
              Honda was the first Japanese automobile manufacturer to release a
              dedicated luxury brand, Acura, in 1986. Aside from their core
              automobile and motorcycle businesses, Honda also manufactures
              garden equipment, marine engines, personal watercraft and power
              generators, and other products. Since 1986, Honda has been
              involved with artificial intelligence/robotics research and
              released their ASIMO robot in 2000. They have also ventured into
              aerospace with the establishment of GE Honda Aero Engines in 2004
              and the Honda HA-420 HondaJet, which began production in 2012.
              Honda has three joint-ventures in China: Honda China, Dongfeng
              Honda, and Guangqi Honda.
              <br />
              <br />
              In 2013, Honda invested about 5.7% (US$6.8 billion) of its
              revenues in research and development. Also in 2013, Honda became
              the first Japanese automaker to be a net exporter from the United
              States, exporting 108,705 Honda and Acura models, while importing
              only 88,357.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
