import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

import { ButtonOverlay } from '../Button';

import styles from './style.module.scss';

const LogoThumbnail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.wrapBtnMenuLogo}>
          <ButtonOverlay className={styles.btnMenuLogo}>
            <BsThreeDots />
          </ButtonOverlay>
        </div>
        <div className={styles.thumbnail}>
          <img
            src="https://cl-wpml.s3.ap-southeast-1.amazonaws.com/cam-nang-viec-lam/wp-content/uploads/2023/06/07090433/lazada.jpg"
            alt=""
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.logoName}>cat.svg</h3>
        </div>
      </div>
    </div>
  );
};

export default LogoThumbnail;
