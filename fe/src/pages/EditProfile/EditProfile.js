import React from 'react';
import Forms from './components/forms/Forms';
import Picture from './Picture/Picture';

const EditProfile = () => {
  return (
    <div className="row">
      <Picture />
      <Forms />
    </div>
  );
};

export default EditProfile;
