import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@components/common/Button';
import LogoThumbnail, { AddNewLogo } from '@components/common/LogoThumbnail';
import ScrollHorizontal from '@components/common/ScrollHorizontal';
import { ELanguageResources } from '@i18n';

import styles from './style.module.scss';

const LogoCarousel = () => {
  const { t } = useTranslation(ELanguageResources.Common);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3 className={styles.title}>{t`logos`} (10)</h3>
        <ButtonLink className={styles.buttonLink}>{t`viewDetail`}</ButtonLink>
      </div>
      <ScrollHorizontal
        className={styles.carouselContainer}
        itemClassName={styles.carouselItem}
        items={Array(12)
          .fill(0)
          .map((_, id) => ({ id: `${id}-logo` }))}
        renderItem={({ id }, { index }) => (index === 0 ? <AddNewLogo /> : <LogoThumbnail logoId={id} />)}
      />
    </div>
  );
};

export default LogoCarousel;
