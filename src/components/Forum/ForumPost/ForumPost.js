import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { mapErrors } from '../../../helpers/mappers';
import { getComments, getPost } from '../../../services/forumService';

import './ForumPost.css';
import Header from '../Header';
import PostHeader from '../PostHeader';
import Post from '../Posts';
import Comment from '../Comment';
import LoadingSpinner from '../../Common/LoadingSpinner';
import Notification from '../../Common/Notification';
import NewCommentBtn from '../../Common/NewCommentBtn';
import NewPostBtn from '../../Common/NewPostBtn';

const ForumPost = () => {
  const { id } = useParams();

  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateComments = (updatedComments) => {
    setComments(updatedComments);
    if(quote) {
      setQuote('');
    }
  };

  const quoteComment = (quoteText) => {
    setQuote(quoteText);
  };

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
        if (errors[0].msg.includes('Cast to')) {
          setError('404 Resource not found ');
        } else {
          setError(errors[0].msg);
        }
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
          {!error && (
            <div className='post-buttons'>
              <NewCommentBtn />
              <NewPostBtn />
            </div>
          )}
          {isLoading && <LoadingSpinner />}
          {error && <Notification>{error}</Notification>}

          {!isLoading && !error && (
            <>
              <PostHeader post={post} comments={comments.length} />
              <Post post={post} quoteComment={quoteComment} />
              {comments.map(comment => (
                <Post
                  key={comment._id}
                  post={comment}
                  updateComments={updateComments}
                  quoteComment={quoteComment}
                />
              ))}
            </>
          )}

          {!isLoading && !error && (
            <Comment post={post} quote={quote} updateComments={updateComments} />
          )}
        </div>
      </section>
    </>
  );
};

export default ForumPost;
