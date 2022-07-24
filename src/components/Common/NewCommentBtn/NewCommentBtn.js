import { HashLink } from 'react-router-hash-link';

import './NewCommentBtn.css';

const NewCommentBtn = () => {
  return (
    <HashLink className='forum-btn btn-blue' to='#comment'>
      <i className='fa-solid fa-plus'/>COMMENT
    </HashLink>
  );
};

export default NewCommentBtn;
