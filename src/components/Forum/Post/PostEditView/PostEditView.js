import { mapErrors } from '../../../../helpers/mappers';
import { validateComment } from '../../../../helpers/validator';
import { getComments, updateComment } from '../../../../services/forumService';

const PostEditView = ({
  post,
  toggleEdit,
  toggleError,
  toggleLoading,
  updateCommentsState,
}) => {
  
  const updateHandler = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const text = formData.get('text').trim();

    try {
      toggleLoading(true);
      toggleError(null);

      validateComment({ text });
      await updateComment(post._id, { text });

      const updatedComments = await getComments(post.postId);
      ev.target.reset();
      toggleEdit();
      updateCommentsState(updatedComments);
    } catch (err) {
      console.log(err);
      const errors = mapErrors(err);
      toggleError(errors);
    } finally {
      toggleLoading(false);
    }
  };

  return (
    <>
      <form method='Post' className='inline-edit' onSubmit={updateHandler}>
        <textarea
          name='text'
          className='inline-edit__area'
          maxLength='1000'
          defaultValue={post.text}
        ></textarea>
        <div className='form-buttons'>
          <button
            type='button'
            className='forum-btn btn-cancel medium-btn'
            onClick={() => toggleEdit()}
          >
            <i className='fa-solid fa-rectangle-xmark' />
            CANCEL
          </button>
          <button type='submit' className='forum-btn update-btn medium-btn'>
            <i className='fa-solid fa-square-check' />
            UPDATE
          </button>
        </div>
      </form>
    </>
  );
};

export default PostEditView;
