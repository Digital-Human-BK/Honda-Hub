import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPostsCount } from '../../services/forumService';

import './Forum.css';
import Header from './Header';
import ForumHeading from './ForumHeading';

const Forum = () => {
  const [categoryCount, setCategoryCount] = useState({
    general: '- -',
    problems: '- -',
    events: '- -',
  });

  useEffect(() => {
    try {
      const fetchCounts = async () => {
        const countData = await getPostsCount();
        setCategoryCount(countData);
      };
      fetchCounts();
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  return (
    <>
      <Header />
      <section id='forum'>
        <div className='inner-width'>
          <ForumHeading title={'Categories'} />
          <ul className='categories'>
            <li>
              <Link to='/forum/general' className='categories__item'>
                <div className='item__icon'>
                  <i className='fa-solid fa-comments'></i>
                </div>
                <div className='item__info'>
                  <h3 className='item__title'>General Discussions</h3>
                  <p className='item__desc'>
                    Discuss anything about your favorite car make.
                  </p>
                </div>
                <div className='item__topics'>
                  <p className='topics__count'>{categoryCount.general}</p>
                  <p className='topics__desc'>Posts</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/forum/problems' className='categories__item'>
                <div className='item__icon'>
                  <i className='fa-solid fa-car-burst'></i>
                </div>
                <div className='item__info'>
                  <h3 className='item__title'>
                    Technical Problems and Service
                  </h3>
                  <p className='item__desc'>
                    Car is broken or needs servicing? This is the place to help
                    each other.
                  </p>
                </div>
                <div className='item__topics'>
                  <p className='topics__count'>{categoryCount.problems}</p>
                  <p className='topics__desc'>Posts</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/forum/events' className='categories__item'>
                <div className='item__icon'>
                  <i className='fa-solid fa-flag-checkered'></i>
                </div>
                <div className='item__info'>
                  <h3 className='item__title'>Meetings and Events</h3>
                  <p className='item__desc'>
                    Meet other honda enthusiasts, learn about future events and
                    meetings.
                  </p>
                </div>
                <div className='item__topics'>
                  <p className='topics__count'>{categoryCount.events}</p>
                  <p className='topics__desc'>Posts</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Forum;
