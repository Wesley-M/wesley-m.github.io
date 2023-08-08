import React from 'react';
import { Box } from '@mui/material';
import './index.css';
import { Navbar } from '../shared/components/navbar';
import { Wrapper } from '../shared/components/wrapper';
import { HeroSection } from './sections/hero';
import { SkillSection } from './sections/skills';
import { WorkSection } from './sections/works';

function App () {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Navbar />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <WorkSection />
      <SkillSection />
    </Box>
  );
}

export default App;
