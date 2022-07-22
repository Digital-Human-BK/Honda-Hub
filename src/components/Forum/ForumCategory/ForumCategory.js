import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { mapCategories, mapErrors } from '../../../helpers/mappers';
import { getCategoryPosts } from '../../../services/forumService';

import './ForumCategory.css';
import Heading from '../Heading';
import Header from '../Header';
import PostCard from '../PostCard';
import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';

const ForumCategory = () => {
  const { category } = useParams();

  const [postsData, setPostsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const posts = await getCategoryPosts(category);
        setPostsData(posts);
      } catch (err) {
        console.log(err);
        const error = mapErrors(err);
        setError(error[0].msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryPosts();
  }, [category]);

  return (
    <>
      <Header />
      <section id='category'>
        <div className='inner-width'>
          <Heading title={mapCategories(category)} />
          {isLoading && <LoadingSpinner />}
          <ul className='posts-list'>
            {
              postsData &&
              postsData.length > 0 &&
              postsData.map((data) => <PostCard key={data._id} data={data} />)}

            {
              postsData &&
              postsData.length === 0 &&
              <h3 className='no-posts'>No posts yet.</h3>}  

            {error && <Notification>{error}</Notification>}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ForumCategory;
