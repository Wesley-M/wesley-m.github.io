import { createContext, useContext, useEffect, useState } from 'react';
import pt from 'timeago.js/lib/lang/pt_BR';
import en from 'timeago.js/lib/lang/en_US';
import { useTranslation } from 'react-i18next';
import * as timeago from 'timeago.js';

const DEFAULT_LANG = 'en';
timeago.register('pt', pt);
timeago.register('en', en);

export const LanguageContext = createContext(DEFAULT_LANG);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem('lang');
    return storedLang ?? DEFAULT_LANG;
  });

  const handleLanguageChange = (lng) => {
    setLanguage(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  function toggleLanguage () {
    if (language === 'en') {
      handleLanguageChange('pt');
      localStorage.setItem('lang', 'pt');
    }
    if (language === 'pt') {
      handleLanguageChange('en');
      localStorage.setItem('lang', 'en');
    }
  }

  return {
    toggleLanguage,
    language,
  };
};
