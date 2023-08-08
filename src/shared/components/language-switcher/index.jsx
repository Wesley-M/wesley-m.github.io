import { IconButton } from '@mui/material';
import { ReactComponent as USFlag } from '../../assets/us.svg';
import { ReactComponent as BrazilFlag } from '../../assets/br.svg';
import { useLanguageContext } from './provider';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <IconButton
      onClick={toggleLanguage}
      color="secondary"
      aria-label="change the site language"
    >
      {language === 'en' ? <USFlag style={{ width: 24 }}/> : <BrazilFlag style={{ width: 24 }}/>}
    </IconButton>
  );
};

