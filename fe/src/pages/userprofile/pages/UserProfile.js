import React from 'react';
import NavBar from '../components/navbar/NavBar';
import UserInfo from '../components/userinfo/UserInfo';

const UserProfile = () => {
  return (
    <div>
      <div className="row">
        <NavBar />
        <UserInfo />
      </div>
    </div>
  );
};

export default UserProfile;
