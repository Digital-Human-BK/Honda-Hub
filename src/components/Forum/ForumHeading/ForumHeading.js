import { Link } from 'react-router-dom';
import './ForumHeading.css';

const ForumHeading = ({ title }) => {
  return (
    <div className='forum-page-heading'>
      <h2 className='forum-page-title'>{title}</h2>
      <Link className='new-post-btn' to='/forum/new-post'>
        <i className='fa-solid fa-plus'></i>NEW POST
      </Link>
    </div>
  );
};

export default ForumHeading;
