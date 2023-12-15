import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import LazyComponent from '@components/core/LazyComponent';
import { MainLayout } from '@components/layouts';
import { AppRouter } from '@constants';

const BrandAssetsPage = lazy(() => import('./BrandAssetsPage'));
const ColorsPage = lazy(() => import('./ColorsPage'));

export const assetsRoutes = {
  path: AppRouter.ASSETS_PAGE,
  element: (
    <MainLayout>
      <LazyComponent>
        <Outlet />
      </LazyComponent>
    </MainLayout>
  ),
  children: [
    {
      index: true,
      element: <BrandAssetsPage />,
    },
    {
      path: AppRouter.ASSETS_COLORS,
      element: <ColorsPage />,
    },
  ],
};
