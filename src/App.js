import React from 'react';

import HeroSection from './components/hero/HeroSection';
import WorkSection from './components/works/WorkSection';

import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import { Wrapper } from "./shared/components/Wrapper";
import ExperienceSection from "./components/experiences/ExperienceSection";
import { lightTheme } from './themes/light';

import './App.css';

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Navbar />
        <Wrapper>
          <HeroSection />
        </Wrapper>
        <ExperienceSection />
        <WorkSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;
