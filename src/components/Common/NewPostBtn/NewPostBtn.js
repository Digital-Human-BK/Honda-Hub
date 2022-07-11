import { Link } from 'react-router-dom';

import './NewPostBtn.css';

const NewPostBtn = () => {
  return (
    <Link className='forum-btn btn-dark' to='/forum/new-post'>
      <i className='fa-solid fa-plus'></i>NEW POST
    </Link>
  );
};

export default NewPostBtn;
