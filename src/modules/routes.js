import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GettingStartedPage from '@components/core/GettingStarted';
import { MainLayout } from '@components/layouts';

import { AppRouter } from '@/constants/router';

import { assetsRoutes } from './assets/routes';
import { authRoutes } from './Auth/routes';
import { templateRoutes } from './templates/routes';
import HomeContainer from './home';

const rootRoutes = createBrowserRouter([
  {
    path: AppRouter.HOME,
    element: (
      <MainLayout>
        <HomeContainer />
      </MainLayout>
    ),
  },
  {
    path: '/getting-started',
    element: <GettingStartedPage />,
  },
  authRoutes,
  templateRoutes,
  assetsRoutes,
]);

export default function RootRouter() {
  return (
    <>
      <RouterProvider router={rootRoutes} />
    </>
  );
}
