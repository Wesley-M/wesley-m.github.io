import { Box } from '@mui/material';
import React from 'react';
import Photo from '../../assets/images/me.jpg';
import { AboutContainer, AboutContent, AboutImage, AboutTitle } from './index.styles';
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <Box>
        <AboutImage src={Photo} alt="Author's profile image" />
      </Box>
      <Box>
        <AboutTitle>{t('blog.about.title')}</AboutTitle>
        <AboutContent>{t('blog.about.content', { returnObjects: true }).join(' ')}</AboutContent>
      </Box>
    </AboutContainer>
  );
};
