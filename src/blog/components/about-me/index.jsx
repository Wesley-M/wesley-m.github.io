import { Box } from '@mui/material';
import React from 'react';
import content from '../../assets/content/about.json';
import Photo from '../../assets/images/me.jpg';
import { AboutContainer, AboutContent, AboutImage, AboutTitle } from './index.styles';

export const AboutMe = () => {
  return (
    <AboutContainer>
      <Box>
        <AboutImage src={Photo} alt="Author's profile image" />
      </Box>
      <Box>
        <AboutTitle>ABOUT ME</AboutTitle>
        <AboutContent>{content.about.join('\n')}</AboutContent>
      </Box>
    </AboutContainer>
  );
};
