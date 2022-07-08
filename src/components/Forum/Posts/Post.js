import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className='post__heading'>
        <div className='heading__icon-wrapper'>
          <div className='heading__icon'>
            <i className='fa-solid fa-comments'></i>
          </div>
        </div>
        <div className='heading__info'>
          <h2 className='heading__info-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elitaaaaa.
          </h2>
          <p className='heading__info-author'>Author: MikeShinoda</p>
          <p className='heading__info-date'>Posted at: 20.07.2022</p>
        </div>
      </div>
      <div className='post__desc'>
        <p className='desc__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          distinctio voluptas esse debitis modi enim perspiciatis quae saepe
          quia quam. Nulla tempore illo aut ratione, sit expedita voluptas alias
          voluptatibus dolore quas aspernatur numquam, dicta animi nostrum
          incidunt quo ullam temporibus? Iste nobis animi accusamus! Laboriosam
          amet ut placeat natus, expedita enim reprehenderit inventore
          dignissimos aspernatur commodi, animi a harum excepturi velit? Cum eos
          architecto facilis natus laudantium reiciendis cupiditate
          reprehenderit hic necessitatibus. Laboriosam temporibus ab mollitia
          possimus, ipsam ad culpa error assumenda, minima dolor ipsum laborum
          quod illum impedit. Nostrum, incidunt consequatur harum at nam sint
          dolores eaque molestiae! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus est consequuntur numquam. Cumque numquam
          mollitia modi dolorum, cum esse quisquam omnis dicta quo dolores.
          Saepe, tenetur molestias laudantium consectetur optio quas culpa
          perspiciatis quis suscipit totam id fuga explicabo facere officiis
          reprehenderit assumenda quia aut cumque quasi harum. At possimus
          voluptate dolorem necessitatibus, error id numquam dolores quisquam
          quod omnis autem aliquam consequuntur corrupti asperiores alias,
          libero cupiditate! Quaerat error ratione, doloribus veritatis eos
          iure, autem dolorem suscipit vitae, corrupti libero saepe ducimus
          accusamus porro repellendus tempore minus quia harum facilis
          cupiditate at dicta distinctio mollitia! Fugiat architecto fugit quo.
        </p>
        <p className='desc__category'>Posted in: General Discussion</p>
      </div>
    </div>
  );
};

export default Post;
