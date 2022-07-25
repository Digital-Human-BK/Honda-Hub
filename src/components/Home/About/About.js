import { useState } from 'react';

import './About.css';

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBioHandler = () => {
    setShowFullBio((prev) => !prev);
  };

  const briefBio = (
    <div className='brief-bio'>
      <p className='bold-text'>
        Soichiro Honda (Honda Sōichirō, 17 November 1906 - 5 August 1991) was a
        Japanese engineer and industrialist. In 1948, he established Honda Motor
        Co., Ltd. and oversaw its expansion from a wooden shack manufacturing
        bicycle motors to a multinational automobile and motorcycle
        manufacturer.
      </p>
      <p>
        Honda has been the world's largest motorcycle manufacturer since 1959,
        reaching a production of 400 million by the end of 2019, as well as the
        world's largest manufacturer of internal combustion engines measured by
        volume, producing more than 14 million internal combustion engines each
        year. Honda became the second-largest Japanese automobile manufacturer
        in 2001. Honda was the eighth largest automobile manufacturer in the
        world in 2015.
      </p>
      <p>
        Honda was the first Japanese automobile manufacturer to release a
        dedicated luxury brand, Acura, in 1986. Aside from their core automobile
        and motorcycle businesses, Honda also manufactures garden equipment,
        marine engines, personal watercraft and power generators, and other
        products. Since 1986, Honda has been involved with artificial
        intelligence/robotics research and released their ASIMO robot in 2000.
        They have also ventured into aerospace with the establishment of GE
        Honda Aero Engines in 2004 and the Honda HA-420 HondaJet, which began
        production in 2012. Honda has three joint-ventures in China: Honda
        China, Dongfeng Honda, and Guangqi Honda.
      </p>
      <p>
        In 2013, Honda invested about 5.7% (US$6.8 billion) of its revenues in
        research and development. Also in 2013, Honda became the first Japanese
        automaker to be a net exporter from the United States, exporting 108,705
        Honda and Acura models, while importing only 88,357.
      </p>
    </div>
  );

  const fullBio = (
    <div className='full-bio'>
      <p className='bold-text'>
        Soichiro Honda (本田 宗一郎, November 17, 1906 – August 5, 1991) is
        Japanese entrepreneur and inventor, engaged in the development and
        industrial production of mopeds, motorcycles and cars. He is the founder
        of the Honda Motor Co., Inc. corporation and automobile companies in the
        U.S. and Japan. Soichiro Honda is the creator of the popular models of
        motorcycles and cars: Super Cub, Civic, Accord, Prelude and etc. He is
        the owner of multibillion-dollar status.
      </p>
      <p>
        Perhaps it would be difficult to find a person who has not heard about
        Honda Motor Company. And this is not surprising, because people from
        more than 140 countries around the world buy its bikes, cars, boat
        motors, mini-tractors, autonomous power stations, tillers for farmers
        and other mechanisms equipped with gasoline engines.
      </p>
      <p>
        Back in 1956, the company presented to the staff job descriptions with
        “The Three Joys” they had to learn.
      </p>
      <p>
        The first of them is the joy of producing. It is a joy known only to the
        engineer. It is an absolute happiness of the engineers when the good is
        of great quality is welcomed by society. The second joy is when a seller
        is happy because a buyer has got a Honda product. The third joy belongs
        to the buyer. The buyer is so happy that he or she bought the product of
        Honda.
      </p>
      <p>
        Honda Company is a unique example of a corporation that successfully
        works on the markets on five continents; it is a member of prestigious
        sporting events, it is the Company that is investing in the development
        of high-tech projects and is working to radically improve the
        environmental performance of manufactured products. The potential of
        Honda engineers is fully consistent to the professional level of sales
        managers around the world. Such a tandem has been ensuring the success
        of the company for many years and gives confidence to be as successful
        in the future.
      </p>
      <p>
        Soichiro Honda, the founder of Honda Company, was born on November 17,
        1906 in Japan, Hamamatsu, Shizuoka. His mother, Mika, was a weaver, and
        even designed her own loom to weave particularly complex patterns. And
        his father, Gihei, was a blacksmith, who ran a bicycle repair business.
        The bicycle transport became extremely popular in big cities those
        years. His father was buying broken bikes for a knockdown price in
        Tokyo, repairing and selling them to all comers. Soichiro was helping
        his father literally from the cradle and the bicycle parts were his
        favorite toys.
      </p>
      <p>
        Helping his father in the smithy, he always got dirty with soot but he
        was very ingenious. At the end of the quarter at school, all students
        were handed grade reports, which parents had to stamp with the family
        seal, instead of putting signatures. Soichiro was not an excellent
        student, but he did not want to disappoint his parents. So he cut family
        hieroglyphs on an old tire and “signed” a grade report himself. Soichiro
        did not realize that the stamp had to be mirror-imaged. He started to
        make fake stamps for other classmates. His family name is 本田 and it
        was symmetrical when written vertically, so it did not cause a problem,
        but some of other children’s family names were not symmetrical. When the
        teacher noticed that, he said with the smile that some hieroglyphs were
        not mirror-imaged. Soichiro Honda’s father left him without a lunch and
        put him in a corner on his knees for a whole day and he did that not for
        the forgery but for the fact that Soichiro did not notice the relation
        between seal pattern and stamp itself.
      </p>
      <p>
        In 1922, after finishing eight years of schooling, Soichiro noticed a
        job ad in a newspaper: an assistant wanted to Art Shokai auto repair
        shop in Tokyo. After that he went straight to the capital of Japan. He
        was accepted, but as the youngest employee, there was left only cleaning
        and preparing meals job for him. Despite this the owner of the auto
        repair shop allowed Soichiro to help in the second workshop, where he
        was designing a racing car every night. During the earthquake in 1923,
        Soichiro drove out three cars from a burning garage, but he had never
        sat behind the wheel. Honda was assigned as an assistance at Art Shokai;
        he helped the workshop’s proprietors, the Sakakibara brothers, in
        designing a Curtiss race car. Soichiro was a riding mechanic at races
        and their team took the first place at the fifth Japan Motor Car
        Championship on November 23, 1924.
      </p>
      <p>
        There were a lot of other victories behind this success. Art Shokai
        workshop became one of the most popular garages in Tokyo and in five
        year after the earthquake, Yuzo Sakakibara expanded his business by
        opening several branches in the province. One of them was led by 21 year
        Soichiro in the town of Hamamatsu. Since that memorable earthquake in
        Tokyo, Honda decided to create durable spare parts for vehicles.
        Soichiro Honda proposed to replace the wooden spokes to metal ones on
        the wheels and even received a patent for his invention. Art Shokai was
        very prosperous and brought considerable revenue. But it was not enough
        for Honda. He tried to produce piston rings, investing almost all his
        savings in the research laboratory. But none of the directors of Art
        Shokai supported him.
      </p>
      <p>
        Soichiro literally lived in the workshop, developing piston rings. But
        it didn’t give any fruits. Honda even handed over the jewels of his wife
        to the pawn shop. Only after that he admitted his incompetence in the
        foundry business and changed the attitude toward education. Up to that
        time Honda had considered science useless. “If the theory promoted
        creativity, then all teachers would have been the inventors.” – Honda
        was saying. Now he has decided to acquire the necessary knowledge in the
        technological school of Hamamatsu. And all his spare time Honda devoted
        to the racing car design. Having developed his own method of engine
        cooling, he resolved the main problem of the all sport cars of that
        time. His engine did not explode from overheating during a race.
        Soichiro decided to take part in major competitions to experience his
        masterpiece.
      </p>
      <p>
        In 1936, Honda took part in the Japanese high-speed rally in Tama River
        in the suburbs of Tokyo and almost died. His car raced at breakneck
        speed – 120 km / h. Honda crashed into a suddenly stopped car at the
        finish. The car turned over thrice in the air, and the champion was
        thrown out of it. The car was lost forever. Honda’s left arm was
        fractured, his shoulder was dislocated and his face was damaged. He
        spent three months at a hospital. The road to the sport was closed
        forever for him.
      </p>
      <p className='bold-text'>
        Being at the hospital, Soichiro received bad news. Out of 30,000 piston
        rings, which he produced in the recent years and sent for examination to
        the Toyota Company, only 50 were accepted for consideration and only
        three pieces passed quality control tests. In addition, Honda was
        dropped out of the college because he refused to take the examination:
        Soichiro needed knowledge, but not a diploma.
      </p>
      <p>
        Any other man, perhaps, would give up in such situation. But after
        recovering, Honda opened his own business in Hamamatsu. In 1937, Honda
        founded the company ‘Tokai Seiki’ and started producing the piston
        rings, production technology of which had been finally found. Things
        went uphill.
      </p>
      <p>
        During the Sino-Japanese War and then World War II Honda’s company was
        providing ‘Toyota’ with the piston rings by 40%, and also supplied parts
        to shipbuilding and aircraft manufacturing companies. But with the
        defeat of Japan in World War II “Tokay Seiko” came to an end. In 1945,
        Hamamatsu was undergone a massive bombardment by American aircraft.
        Honda assumed that the country is entering into a period of poverty and
        ruin and decided not to restore the factory, but sold the business to
        ‘Toyota’ for 450,000 thousand yen. 10,000 ten thousand yen the
        businessman spent on the purchase of alcohol tank. By installing it in
        his yard, he said publicly that he was going to rest a year. Indeed,
        Soichiro spent a year in drunken revels, treating friends with homemade
        whiskey.
      </p>
      <p>
        In 1946 Honda opened his own ‘factory’ with a grandiloquent name –
        ‘Honda Technology Research Institute’ and became engaged in artisanal
        production of mopeds. He fitted a generator engine of a tiny army radio
        to a bicycle, used rubber hot water bottle as a fuel tank and filled it
        with fir oil. There was plenty of fir oil in the countryside of Japan in
        those times. Honda sold 1,500 one thousand five hundred of these mopeds,
        nicknamed ‘choo-choo’ for their sound. Then Honda replaced the engine by
        a two-stroke engine of his own design. It was the first original Honda
        A-Type product moped of indefatigable businessman which was developed in
        1947. And after two years the ‘Institute’ became the Honda Motor
        Company.
      </p>
      <p>
        In 1949, the first model of a motorcycle with a two-stroke engine
        Soichiro called ‘The Dream’. Two years later he started the production
        of a model with four-stroke engine. And by 1958, when his model of
        “Super Cub” model came to the U.S., Honda was already the largest
        Japanese manufacturer of motorcycles, leaving behind not only 50
        Japanese competitors but also 200 competitors from other countries.
      </p>
      <p className='bold-text'>
        As soon as the Honda Motor began producing motorcycles, foreign
        companies were interested in the production of Honda. To sign up a
        contract their representatives came to Japan. There was a story which
        happened with one of the foreign partners and which was included in all
        the biographies of Honda Soichiro.
      </p>
      <p>
        Once, Honda overdid when treating a regular guest with sake. The guest
        felt very bad and during a visit to the WC he dropped his false teeth
        into the toilet. Honda did not hesitate for a moment and climbed into a
        cesspool, found the jaw and he went straight into the bathroom, after
        some time he came out, dashingly dancing with dentures in the mouth. He
        was able to instantly relieve stress and the deal was saved. Soichiro,
        recalling the incident, said: “The man, who stands at the head of the
        company, should be ready to act in such a way that it may seem strange
        to other employees. It is not necessary to repeat these steps several
        times: it is enough of one precedent to make your team follow you.”
      </p>
      <p>
        Rapidly growing company required completely new approaches to
        management. Management improvements implemented at Honda Company were
        truly revolutionary. The departments were clearly delineated and were
        responsible for the scientific and technical developments and units
        engaged in direct production. Honda Research Center got an autonomous
        status and it abandoned from the management pyramid. Design engineer’s
        promotion depended not on the vacated positions but on the personal
        achievements. Soichiro had always opposed to the hierarchical form of
        management, believing that “in general, people work harder and more
        innovative if they are not forced. Quite a different picture of where
        they are strongly suggested what to do. Honda’s system was designed to
        raise geniuses who sooner or later will replace him as president.
      </p>
      <p>
        Incidentally, the fact that Soichiro did not intend to transfer business
        to heirs, played a very important role in the company receiving
        long-term bank loans: the financiers were confident that it would be
        passed into the hands of highly qualified professionals. The
        quintessence of new approaches to management and production were
        enunciated by Honda in January 1956 and was called “The Company
        Principle”. Their essence can be summarized in four basic principles:
        the creation of new markets, participation of all employees in
        management, internationalization of production, solution of technical
        and other problems without looking back to precedents, traditions, and
        common views.
      </p>
      <p>
        Honda’s motorcycle business was rapidly gaining momentum. In 1961 the
        company was producing 100 thousand motorcycles per month and in 1968,
        the company was producing one million motorcycles per month. By the
        mid-80s, Soichiro was holding in his hands 60% of the world market and
        by 90s the company’s production reached 3 million motorcycles a year.
      </p>
      <p>
        Having reached the top in the motorcycle industry, Honda decided that
        now he can proceed with the implementation of a cherished dream – to
        create automobiles. When he was a child, he was literally mesmerized
        when he first saw a car. In his bio he recalls this impression:
        “Forgetting about everything in the world, I was running after the car…I
        was deeply moved…I think it was then, although I was very young, I had
        the idea that someday I will construct a car myself.”
      </p>
      <p className='bold-text'>
        In the conquest of the automotive market Honda made a bet on his
        favorite race cars. The first one was debuted in 1962. While Japanese
        officials tried to convince him in the futility of the project, arguing
        that the country did not need another car manufacturer, but energetic
        entrepreneur did not listen their arguments. In 1970 Soichiro Honda was
        the winner in the highly competitive automotive industry.
      </p>
      <p>
        One of the first attacks, Soichiro Honda took on the problem of exhaust
        gases. None of the world’s car automakers could not handle it directly,
        and solved it by creating a catalytic converter. And only Honda was able
        to design the first engine with a low pollution level. This
        environmentally friendly device he installed to Honda Civic model that
        was launched into production in 1975 and quickly gained immense
        popularity.
      </p>
      <p>
        Ignoring the traditional idea that American workers are not able to
        assemble high-quality Japanese cars, in the mid-70s Honda built in
        Marysville, Ohio a plant which was going to manufacture cars that match
        the quality standards of the Japanese assembly. Honda Accord that was
        manufactured there was the sales leader in the U.S in the late 80s.
        Thanks to this car Soichiro was the first Japanese leader, noted in the
        Hall of Fame of the American automobile industry.
      </p>
      <p>
        At beginning of the 80s Honda Motor Co., Inc. was the third largest
        producer of cars in Japan. And by the end of the decade it was the third
        company in the world.
      </p>
      <p>
        For elegant solutions to complex engineering problems Honda has always
        walked the easiest way. Its production was addressed to all – men,
        women, teenagers – and every particular. It was designed for very large
        middle class consumers, who until his producers did not take into
        account. The main force of the entrepreneur was not only bold and
        elegant technical solutions, the beauty of design, but also in the
        market intuition, which he possessed by nature.
      </p>
      <p>
        To Honda’s opinion the secret of his success lies in the fact that he
        had always been guided by the empirical method of “trials and errors”.
        And he also believed that “employers must be willing to set incredible
        goals and be ready for defeat”.
      </p>
      <p>
        Another essential quality of a businessman, according to Soichiro, is
        the ability to take risks. He did not admit defeat and was willing to
        risk everything for his beliefs and ideas, in order to achieve set goal.
      </p>
      <p className='bold-text'>
        Among his employees, he was known as “Mr. Thunderstorm”. He got this
        nickname for emotional outbursts. Honda was loved, by yet was feared his
        wrath. Soichiro Honda served as an example of a man with perseverance,
        modesty, pleasant manners and with the ability to accept mistakes as a
        valuable asset to his employees and family – his wife, Sachi and his
        children (two boys and two daughters).
      </p>
      <p>
        While Honda vehicles quickly and confidently took the leading place in
        the world market, he had been the stepchild in Japanese automotive
        industry. The reason for his rejection of Japan’s business world was in
        the denial of businessman traditional pillars of the economy. His
        rebelliousness was especially manifested in the early 70s, when Japan
        had the oil crisis and all of the manufacturers agreed to reduce output
        and raise prices. But only Soichiro refused to participate in that and
        did everything to oppose the scenario: he doubled the production and
        lowered prices. And he was right. The company’s sales of Nissan and
        Toyota fell by 40%, while Honda’s ones did grew up by 76%.
      </p>
      <p>
        All his life this rebellious businessman was tirelessly fighting with
        traditions. For example, he refused to hire professionals for many
        times, who had received higher education, because he believed that
        dogmatic thinking would be a hindrance in the search for new ways of
        development. He resisted the influence of business traditions to the
        world of Honda Motor, which always had its principles. But he never
        renounced his errors about which he said: “Looking back on my work, I
        feel that I was doing nothing more than mistakes, blunders and serious
        omissions. But I am proud of the achievements. Although I did one
        mistake after another, my mistakes and failures never occurred to the
        same reasons”.
      </p>
      <p>
        Honda had worked for 65 years in the company and personally tested every
        new car. He never admitted his relatives to the leadership: “No matter
        how outstanding could be the company’s founder; there is no guarantee
        that his son would be capable of the same. The company’s management
        should be given to a person who has the distinctive qualities of a
        leader.”
      </p>

      <p>
        In 1973, Honda Motor Co., Inc. celebrated its 25th anniversary. During
        the board of directors meeting, dedicated to this event, Soichiro Honda
        declared that he was going to retire. The new president, as expected,
        was chosen from among the employees. The founding father was fond of
        saying that the company thrives when its former chief appears there as
        seldom as possible. So his departure from the office was final.
      </p>
      <p>
        But Honda was full of energy to remain idle. He was elected as the
        vice-president of the Tokyo Chamber of Commerce and the Association of
        Japanese Automotive Industry. He founded two NGOs – the International
        Association of Traffic and Safety Sciences and the Honda Foundation and
        also studied the influence of science and technology on the environment
        and developed an environmentally friendly technology. He also lectured
        at international conferences.
      </p>
      <p>
        The legendary businessman died on August 5, 1991. By the end of his life
        he came up with a large store of achievements, which were 470 inventions
        and 150 patents, honorary doctorate at Michigan Technical University and
        Ohio State University, the highest honor of his country – Japan’s Blue
        Ribbon – and many other more achievements. Starting a business having $
        3,200 thousand dollars, he created the largest company with annual
        revenue of more than $ 30 billion dollars.
      </p>
      <p className='bold-text'>
        Soichiro Honda once said: “Many people dream of success. I believe that
        success can be achieved only through repeated failure and self-analysis.
        Success is only one percent of your work, and the rest – bold overcoming
        of obstacles. If you are not afraid of them, success will come to you
        itself”. Today’s prosperity of Honda Motor Co., Inc. proves the truth of
        its founder.
      </p>
      <p>
        We hope you’ve enjoyed reading Soichiro Honda biography and it’s
        inspired you to new discoveries.
      </p>
      <p className='cite'>
        "Soichiro Honda Biography: A Great History of Japanese Car
        Manufacturer." Astrum People, Web Article...
      </p>
    </div>
  );

  return (
    <section id='about'>
      <div className='inner-width'>
        <h2 className='section-title'>About</h2>
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
            {showFullBio ? fullBio : briefBio}
            <button className='bio-toggler' onClick={toggleBioHandler}>
              {showFullBio ? 'Show less' : 'Read full Biography'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
