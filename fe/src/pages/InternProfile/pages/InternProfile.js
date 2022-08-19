import React from 'react';
import NavBar from '../../userprofile/components/navbar/NavBar';
import InternInfo from '../InternInfo/InternInfo';

const InternProfile = () => {
  return (
    <div>
      <div className="row">
        <NavBar />
        <InternInfo />
      </div>
    </div>
  );
};

export default InternProfile;
