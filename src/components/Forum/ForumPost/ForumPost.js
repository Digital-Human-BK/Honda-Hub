import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { mapErrors } from '../../../helpers/mappers';
import { getComments, getPost } from '../../../services/forumService';

import './ForumPost.css';
import Header from '../Header';

import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';
import Post from '../Posts';

const ForumPost = () => {
  const { id } = useParams();

  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [postData, commentsData] = await Promise.all([
          getPost(id),
          getComments(id),
        ]);
      } catch (err) {
        console.log(err);
        const error = mapErrors(err);
        setError(error[0].msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostAndComments();
  }, [id]);

  return (
    <>
      <Header />
      <section id='forum-post'>
        <div className='inner-width'>
          {isLoading && <LoadingSpinner />}
          <Post post={post} />
        </div>
      </section>
    </>
  );
};

export default ForumPost;
