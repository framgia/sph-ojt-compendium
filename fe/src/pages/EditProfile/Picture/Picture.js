import React from 'react';
import styles from './Picture.module.css';
import DisplayText from '../../userprofile/components/displaytext/DisplayText';
import BtnNavigate from '../../userprofile/components/button/BtnNavigate';
import BackArrow from '../components/BackArrow/BackArrow';

const Picture = () => {
  return (
    <div className={styles.pictureCenter}>
      <div className={styles.back}>
        <BackArrow />
      </div>
      <div className={styles.profileText}>
        <DisplayText text="PROFILE" />
      </div>
      <div>
        <img
          className={styles.picSize}
          src="/images/editProfile.png"
          alt="Profile"
        />
        <div className={styles.uploadBtn}>
          <BtnNavigate btnText="Upload" />
        </div>
      </div>
    </div>
  );
};

export default Picture;
