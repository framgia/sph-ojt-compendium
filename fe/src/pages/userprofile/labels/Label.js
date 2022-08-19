import React from 'react';
import styles from './Label.module.css';

const Label = ({ text }) => {
  return <label className={styles.label}>{text}</label>;
};

export default Label;
