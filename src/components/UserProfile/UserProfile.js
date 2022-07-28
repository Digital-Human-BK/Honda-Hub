import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { mapErrors } from '../../helpers/mappers';
import { getUserData } from '../../services/forumService';
import useAuthContext from '../../hooks/useAuthContext';

import './UserProfile.css';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import Error from '../Error';
import Loader from '../Common/Loader';
import UserHeader from './UserHeader';

const UserProfile = () => {
  const { userId } = useParams();
  const { user } = useAuthContext();

  const isOwner = userId === user._id;

  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateUserData = (updatedData) => {
    setUserData(updatedData);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const [userObj, postsArray] = await getUserData(userId);
        setUserData(userObj);
        setUserPosts(postsArray);
      } catch (err) {
        const errors = mapErrors(err);
        console.log(errors);
        setError('Something went wrong. Please try again later...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <>
      <UserHeader
        isOwner={isOwner}
        userData={userData}
        updateUserData={updateUserData}
      />

      <section className='user-profile section-bg'>
        <div className='inner-width'>
          {userData && <UserInfo userData={userData} isOwner={isOwner} />}
          {userPosts && <UserPosts posts={userPosts} isOwner={isOwner} />}
        </div>
      </section>
    </>
  );
};

export default UserProfile;
