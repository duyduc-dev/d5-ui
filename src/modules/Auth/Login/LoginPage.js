import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ButtonDark, ButtonLink } from '@components/common/Button';
import Input from '@components/common/Input';
import { AppRouter } from '@constants';
import { ELanguageResources } from '@i18n';
import { Divider } from '@mui/material';

import style from './login.module.scss';

const LoginPage = () => {
  const { t } = useTranslation(ELanguageResources.Common);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(AppRouter.HOME);
  };

  return (
    <div className={style.container}>
      <h2 className={style.logoObollo}>{t`D5 - Design`}</h2>
      <h3 className={style.signIn}>{t`signIn`}</h3>
      <ButtonDark fullWidth className={style.signInWithGoogle}>
        <BsGoogle size={18} />
        {t`signInWithGoogle`}
      </ButtonDark>
      <div className={style.divide}>
        <Divider />
        <p className={style.orSignInWithEmail}>{t`orSignInWithEmail`}</p>
        <Divider />
      </div>
      <div className={style.formLogin}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <ButtonLink
          to={AppRouter.FORGOT_PASSWORD}
          sx={{ width: 'fit-content', paddingX: 0 }}
        >{t`forgotPassword`}</ButtonLink>
        <ButtonDark onClick={handleLogin} className={style.btnSignIn}>{t`signIn`}</ButtonDark>
        <p className={style.donNotAccount}>
          {t`donNotAccount`}
          <ButtonLink to={AppRouter.SIGN_UP}>{t`signUp`}</ButtonLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
