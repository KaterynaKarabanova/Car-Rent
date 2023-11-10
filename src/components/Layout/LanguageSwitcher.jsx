import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={e => changeLanguage(e)}>
      <option value="ua">🇺🇦&emsp;</option>
      <option value="en">🇺🇸&emsp;</option>
    </select>
  );
};

export default LanguageSwitcher;
