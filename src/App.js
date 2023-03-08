import React from 'react';

import HeroSection from './components/hero/HeroSection';
import WorkSection from './components/works/WorkSection';

import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import { Wrapper } from "./components/layout/Wrapper";
import ExperienceSection from "./components/experiences/ExperienceSection";
import { darkTheme } from './themes/schemes/dark';

import './App.css';

function App() {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Navbar />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <ExperienceSection />
      <WorkSection />
    </Box>
  );
}

export default App;
