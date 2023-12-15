import React, { useEffect } from 'react';
import Toaster from '@components/common/Toaster';

import RootRouter from '@/modules/routes';

import 'animate.css';

import { BODY_CLASS } from './constants';

import styles from './app.module.scss';

const App = () => {
  useEffect(() => {
    document.body.classList.add(BODY_CLASS);
  }, []);

  return (
    <div className={styles.app}>
      <RootRouter />
      <Toaster />
    </div>
  );
};

export default App;
