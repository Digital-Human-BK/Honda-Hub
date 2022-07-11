import './ForumHeading.css';
import NewPostBtn from '../../Common/NewPostBtn';

const ForumHeading = ({ title }) => {
  return (
    <div className='forum-page-heading'>
      <h2 className='forum-page-title'>{title}</h2>
      <NewPostBtn/>
    </div>
  );
};

export default ForumHeading;
