import React from 'react';
import { useTranslation } from 'react-i18next';

const RegistrationButton = () => {
  const { t } = useTranslation();

  return (
    <button>{t('register')}</button>
  );
};

export default RegistrationButton;