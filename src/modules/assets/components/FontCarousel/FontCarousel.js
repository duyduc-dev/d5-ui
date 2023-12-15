import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '@components/common/Button';
import FontThumbnail from '@components/common/FontThumbnail';
import ScrollHorizontal from '@components/common/ScrollHorizontal';
import { ELanguageResources } from '@i18n';

import styles from './style.module.scss';

const FontCarousel = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  return (
    <div className={styles.container}>
      <div className={styles.headContainer}>
        <h3 className={styles.title}>{t`typography`}(10)</h3>
        <ButtonLink className={styles.buttonLink}>{t`viewDetail`}</ButtonLink>
      </div>
      <div className={styles.carouselContainer}>
        <ScrollHorizontal
          items={Array(12)
            .fill(0)
            .map((_, i) => ({ id: `${i}` }))}
          renderItem={(item) => <FontThumbnail fontId={item.id} />}
        />
      </div>
    </div>
  );
};

export default FontCarousel;
