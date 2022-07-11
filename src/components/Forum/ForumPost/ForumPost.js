import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { mapErrors } from '../../../helpers/mappers';
import { getComments, getPost } from '../../../services/forumService';

import './ForumPost.css';
import Header from '../Header';

import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';
import Post from '../Posts';
import PostHeader from '../PostHeader';
import NewCommentBtn from '../../Common/NewCommentBtn';
import NewPostBtn from '../../Common/NewPostBtn';

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
        setPost(postData);
        setComments(commentsData);
      } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        setError(errors[0].msg);
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
          <div className='post-buttons'>
            <NewCommentBtn />
            <NewPostBtn />
          </div>
          {isLoading && <LoadingSpinner />}
          {error && <Notification>{error}</Notification>}

          {!isLoading && !error && (
            <PostHeader post={post} comments={comments.length} />
          )}

          {!isLoading && !error && <Post post={post} />}

          {!isLoading &&
            !error &&
            comments.map((comment, i) => <Post key={i} post={comment} />)}

          {!isLoading && !error && <div id='comment'></div>}
        </div>
      </section>
    </>
  );
};

export default ForumPost;
