import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDark, ButtonLink } from '@components/common/Button';
import Input from '@components/common/Input';
import { AppRouter } from '@constants';
import { ELanguageResources } from '@i18n';

import styles from './signUp.module.scss';

const SignUpPage = () => {
  const { t } = useTranslation(ELanguageResources.Common);

  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>{t`D5 - Design`}</h2>
      <h3 className={styles.signUp}>{t`signUp`}</h3>
      <div className={styles.wrapForm}>
        <div className={styles.wrapInput}>
          <Input placeholder={t`email`} />
        </div>
        <div className={styles.wrapInput}>
          <Input placeholder={t`password`} />
        </div>
        <div className={styles.wrapInput}>
          <Input placeholder={t`confirmPassword`} />
        </div>
        <ButtonDark height="4.8rem" fullWidth className={styles.btnSignUp}>{t`signUp`}</ButtonDark>
      </div>
      <p className={styles.doYouHaveAccount}>
        {t`doYouHaveAccount`}
        <ButtonLink to={AppRouter.LOGIN}>{t`signIn`}</ButtonLink>
      </p>
    </div>
  );
};

export default SignUpPage;
