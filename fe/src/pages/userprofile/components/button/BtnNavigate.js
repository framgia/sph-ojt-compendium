import React from 'react';
import styles from './btnNavigate.module.css';

const BtnNavigate = ({ btnText }) => {
  return (
    <div>
      <button className={styles.btnNavigate}>{btnText}</button>
    </div>
  );
};

export default BtnNavigate;
