import React from 'react';
import { Outlet } from 'react-router-dom';
import { BaseBody, BaseContent, BaseLayout } from '@components/layouts/BaseLayout';

import styles from './styles.module.scss';

const AuthContainer = () => {
  return (
    <BaseLayout>
      <BaseBody disablePaddingHeader>
        <BaseContent fullScreen>
          <div className={styles.authContainer}>
            <Outlet />
          </div>
        </BaseContent>
      </BaseBody>
    </BaseLayout>
  );
};

export default AuthContainer;
