import React from 'react';
import BtnNavigate from '../button/BtnNavigate';
import DisplayText from '../displaytext/DisplayText';
import ReportsHistory from '../reportshistory/ReportsHistory';
import styles from './UserInfo.module.css';

const UserInfo = ({ text, btnText }) => {
  return (
    <div className={styles.size}>
      <div className={styles.userInfo}>
        <DisplayText text="Email: Email here" />
        <DisplayText text="Birthdate: Birthdate here" />
        <DisplayText text="Sex: Sex here" />
        <DisplayText text="School: School here" />
      </div>
      <div className={styles.btnPos}>
        <BtnNavigate btnText="Edit Profile" />
      </div>
      <div className={styles.boxPos}>
        <ReportsHistory />
      </div>
    </div>
  );
};

export default UserInfo;
