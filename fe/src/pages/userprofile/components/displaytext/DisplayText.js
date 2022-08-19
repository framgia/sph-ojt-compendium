import React from 'react';
import styles from './DisplayText.module.css';

const DisplayText = ({ text }) => {
  return <div className={styles.displayText}>{text}</div>;
};

export default DisplayText;
