import React, { lazy, Suspense } from 'react';
import { PuffLoader } from '@components/common/Loader';

const HomePage = lazy(() => import('./HomePage'));

const HomeContainer = () => {
  return (
    <Suspense fallback={<PuffLoader size={100} />}>
      <HomePage />
    </Suspense>
  );
};

export default HomeContainer;
