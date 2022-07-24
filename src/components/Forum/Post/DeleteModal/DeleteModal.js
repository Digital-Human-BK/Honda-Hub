import { useNavigate } from 'react-router-dom';
import { mapErrors } from '../../../../helpers/mappers';

import {
  deleteComments,
  deletePost,
  deleteComment,
  getComments,
} from '../../../../services/forumService';

import './DeleteModal.css';

const DeleteModal = ({
  post,
  toggleDelete,
  toggleError,
  toggleLoading,
  updateCommentsState,
}) => {
  const navigate = useNavigate();

  const deleteHandler = () => {
    if (post.title) {
      deletePostAndComments();
    } else {
      deleteCommentOnly();
    }
  };

  const deletePostAndComments = async () => {
    try {
      toggleLoading(true);
      toggleError(null);
      await Promise.all([deletePost(post._id), deleteComments(post._id)]);
      navigate('/forum');
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      toggleError(errors);
    } finally {
      toggleLoading(false);
    }
  };

  const deleteCommentOnly = async () => {
    try {
      toggleLoading(true);
      toggleError(null);
      await deleteComment(post._id);
      const comments = await getComments(post.postId);
      updateCommentsState(comments);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      toggleError(errors);
    } finally {
      toggleLoading(false);
    }
  };

  return (
    <div className='overlay' onClick={toggleDelete}>
      <div className='modal'>
        <i className='fa-solid fa-triangle-exclamation'/>
        <h3 className='warning'>You are about to delete this post!</h3>
        <p className='warning__desc'>
          Deleting will permanently remove the post from database.
        </p>
        <div className='delete-controls'>
          <button className='controls-btn cancel-del' onClick={toggleDelete}>
            <i className='fa-solid fa-circle-xmark'/> Cancel
          </button>
          <button className='controls-btn delete-btn' onClick={deleteHandler}>
            <i className='fa-solid fa-trash-can'/> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
