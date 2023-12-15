import React from 'react';
import { MainHeader } from '@components/common/Header';
import LeftBarNavigate from '@components/common/Leftbar';

import { BaseBody, BaseContent, BaseLayout } from '../BaseLayout';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <BaseLayout>
      <MainHeader />
      <BaseBody>
        <LeftBarNavigate />
        <BaseContent>{children}</BaseContent>
      </BaseBody>
    </BaseLayout>
  );
};

export default MainLayout;
