import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/profile');
  };

  return (
    <img
      src="/images/Back Button.png"
      alt="Back Button"
      onClick={handleSubmit}
    />
  );
};

export default BackArrow;
