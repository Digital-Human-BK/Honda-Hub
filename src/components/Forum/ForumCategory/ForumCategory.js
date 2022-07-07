import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ForumHeading from '../ForumHeading';
import Header from '../Header';
import Post from '../Post';
import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';
import { parseCategory } from '../../../helpers/dataTransform';
import { mapErrors } from '../../../helpers/mappers';
import { getCategoryPosts } from '../../../services/forumService';

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
          <ForumHeading title={parseCategory(category)} />
          {isLoading && <LoadingSpinner />}
          <ul className='posts-list'>
            {postsData &&
              postsData.length > 0 &&
              postsData.map((data) => <Post key={data._id} data={data} />)}

            {error && <Notification>{error}</Notification>}
            {/* {!error && !isLoading && postsData.length === 0 && noResultsMsg} */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ForumCategory;
