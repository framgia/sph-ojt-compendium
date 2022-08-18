import React from 'react';
import DisplayText from '../../userprofile/components/displaytext/DisplayText';
import InternHistory from '../InternHistory/InternHistory';
import styles from './InternInfo.module.css';

const InternInfo = ({ text, btnText }) => {
  return (
    <div className={styles.size}>
      <div className={styles.userInfo}>
        <DisplayText text="Email: Intern Email here" />
        <DisplayText text="Birthdate: Intern Birthdate here" />
        <DisplayText text="Sex: Intern Sex here" />
        <DisplayText text="School: Intern School here" />
      </div>
      <div className={styles.boxPos}>
        <InternHistory />
      </div>
    </div>
  );
};

export default InternInfo;
