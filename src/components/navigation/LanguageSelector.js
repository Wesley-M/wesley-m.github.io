import { useState } from 'react';
import {Stack, styled} from "@mui/material";

import USFlag from '../../static/icons/usa-flag.svg'
import BRFlag from '../../static/icons/brazil-flag.svg'

const LanguageSelector = ({ toggleLanguage, language }) => {
  console.log(language);

  const Flag = styled('img')(() => ({
    width: 24,
    height: 24,
    '&:hover': {
      cursor: 'pointer'
    }
  }));

  return (
      <Stack direction="row" sx={{ width: '10%' }} gap={0.5}>
        <Flag
            src={USFlag}
            style={{
              filter: language === 'en' ? 'grayscale(0)' : 'grayscale(1)',
            }}
            alt="USA flag"
            onClick={toggleLanguage}
        />
        <Flag
            src={BRFlag}
            style={{
              filter: language === 'pt-br' ? 'grayscale(0)' : 'grayscale(1)'
            }}
            alt="Brazil flag"
            onClick={toggleLanguage}
        />
      </Stack>
  );
}

export default LanguageSelector;