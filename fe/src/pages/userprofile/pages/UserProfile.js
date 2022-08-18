import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import NavBar from '../components/navbar/NavBar';
import ReportsHistory from '../components/reportshistory/ReportsHistory';
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
