import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledSwitcher } from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <StyledSwitcher value={i18n.language} onChange={e => changeLanguage(e)}>
      <option value="ua">🇺🇦&emsp;</option>
      <option value="en">🇺🇸&emsp;</option>
    </StyledSwitcher>
  );
};

export default LanguageSwitcher;
