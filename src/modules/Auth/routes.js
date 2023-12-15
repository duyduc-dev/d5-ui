import React from 'react';
import { AppRouter } from '@constants';

import AuthContainer from './AuthContainer';
import ForgotPassword from './ForgotPassword';
import LoginPage from './Login';
import SignUpPage from './SignUp';

export const authRoutes = {
  path: AppRouter.LOGIN,
  element: <AuthContainer />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
    {
      path: AppRouter.SIGN_UP,
      element: <SignUpPage />,
    },
    {
      path: AppRouter.FORGOT_PASSWORD,
      element: <ForgotPassword />,
    },
  ],
};
