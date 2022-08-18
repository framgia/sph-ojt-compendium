import React from 'react';
import styles from './NavBar.module.css';
import Button from '../button/Button';
import Breakline from '../breakline/Breakline';
import { Link } from 'react-router-dom';

const NavBar = ({ text }) => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.profilePic}>
        <img src="/images/profile.png" alt="profile" />
      </div>
      <div className={styles.name}>
        <h1>Name Here...</h1>
      </div>
      <Breakline />
      <div className="routes">
        <Button text="Dashboard" />
        <Button text="Interns" />
        <Button text="Daily Report" />
        <Link to="/User-Profile">
          <Button text="User Profile" />
        </Link>
        <Breakline />
        <Button text="Log Out" />
      </div>
    </div>
  );
};

export default NavBar;
