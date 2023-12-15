import React from 'react';
import { useTranslation } from 'react-i18next';
import { LuList } from 'react-icons/lu';
import { ButtonOverlay } from '@components/common/Button';
import ScrollHorizontal from '@components/common/ScrollHorizontal';
import ThumbnailDesign from '@components/common/ThumbnailDesign';
import Tooltip from '@components/common/Tooltip';
import { ContentContainer } from '@components/layouts/BaseLayout';
import { ELanguageResources } from '@i18n';

import styles from './home.module.scss';

const getItems = () =>
  Array(12)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const HomePage = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  const [items] = React.useState(getItems);

  return (
    <ContentContainer>
      <div className={styles.designContainer}>
        <div className={styles.headerContainer}>
          <h3 className={styles.titleContainer}>{t`recentDesigns`}</h3>
          <Tooltip title={t`viewMore`}>
            <ButtonOverlay overlayHover>
              <LuList size={16} />
            </ButtonOverlay>
          </Tooltip>
        </div>
        <div className={styles.bodyContainer}>
          <ScrollHorizontal
            items={items}
            renderItem={(_, { dragging, index }) => <ThumbnailDesign projectId={index} dragging={dragging} />}
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default HomePage;
