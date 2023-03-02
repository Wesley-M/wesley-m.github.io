import React from 'react';

import HeroSection from './components/hero/HeroSection';
import WorkSection from './components/works/WorkSection';

import './App.css';
import { Box } from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import { Wrapper } from "./shared/Wrapper";
import ExperienceSection from "./components/experiences/ExperienceSection";

function App() {

  return (
    <Box>
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
