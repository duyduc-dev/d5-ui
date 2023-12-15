import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@components/common/Button';
import ColorThumbnail from '@components/common/ColorThumbnail';
import ScrollHorizontal from '@components/common/ScrollHorizontal';
import { AppRouter } from '@constants';
import { ELanguageResources } from '@i18n';

import styles from './index.module.scss';

const ColorCarousel = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h3 className={styles.title}>{t`colors`}(10)</h3>
        <ButtonLink to={AppRouter.ASSETS_COLORS} className={styles.buttonLink}>{t`viewDetail`}</ButtonLink>
      </div>
      <div className={styles.carouselContainer}>
        <ScrollHorizontal
          items={Array(12)
            .fill(0)
            .map((_, i) => ({ id: `${i}`, color: i % 2 === 0 ? '#7431fa' : i % 3 === 0 ? '#ff0000' : '#fff000' }))}
          renderItem={(item) => <ColorThumbnail colorId={item.id} hexColor={item.color} />}
        />
      </div>
    </div>
  );
};

export default ColorCarousel;
