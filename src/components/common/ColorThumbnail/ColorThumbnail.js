import React from 'react';
import { useTranslation } from 'react-i18next';
import { ELanguageResources } from '@i18n';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import styles from './styles.module.scss';

const ColorThumbnail = ({ colorId, hexColor }) => {
  const { t } = useTranslation(ELanguageResources.Common);
  return (
    <div data-color-id={colorId} className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.wrapColor}>
          <Box className={styles.color} bgcolor={hexColor}></Box>
        </div>
        <h4 className={styles.colorName}>Violet</h4>
        <Divider className={styles.separator} />
        <div className={styles.colorInfo}>
          <p className={styles.typeCOlor}>{t`hex`}</p>
          <p className={styles.colorCode}>{hexColor}</p>
        </div>
        <div className={styles.colorInfo}>
          <p className={styles.typeCOlor}>{t`rgb`}</p>
          <p className={styles.colorCode}>{hexColor}</p>
        </div>
        <div className={styles.colorInfo}>
          <p className={styles.typeCOlor}>{t`hsl`}</p>
          <p className={styles.colorCode}>{hexColor}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorThumbnail;
