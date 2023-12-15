import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '@components/layouts';

import TemplatesPage from './TemplatesPage';

export const templateRoutes = {
  path: '/templates',
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    {
      index: true,
      element: <TemplatesPage />,
    },
  ],
};
