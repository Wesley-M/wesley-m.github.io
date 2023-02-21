import React from 'react';

import ContactSection from './components/contacts/ContactSection';
import HeroSection from './components/hero/HeroSection';
import WorkSection from './components/works/WorkSection';

import './App.css';
import {Box, styled} from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import BottomMenu from "./components/navigation/BottomMenu";
import {Wrapper} from "./shared/Wrapper";
import ExperienceSection from "./components/experiences/ExperienceSection";

function App() {

  return (
      <Box>
        <Navbar/>
        <Wrapper>
          <HeroSection />
        </Wrapper>
        <ExperienceSection/>
        <BottomMenu/>
      </Box>
  );
}

export default App;
