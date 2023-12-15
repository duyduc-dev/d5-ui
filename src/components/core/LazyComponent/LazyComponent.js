import React, { Suspense } from 'react';
import { PuffLoader } from '@components/common/Loader';

const LazyComponent = ({ fallback = <PuffLoader size={100} />, children }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazyComponent;
