import React, { useContext } from 'react';

import ContactSection from './components/contacts/ContactSection';
import HeroSection from './components/hero/HeroSection';
import SkillSection from './components/skills/SkillSection';
import WorkSection from './components/works/WorkSection';

import './App.css';
import {Box, styled} from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import Background from "./static/images/background.jpg";

function App() {

  const Wrapper = styled(Box)(({ theme }) => ({
    marginBottom: '5em',
    padding: '1.5em',
    top: 0,
    width: '80%',
    margin: '0 10%'
  }))

  const BackgroundBox = styled(Box)(() => ({
    "&::before": {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
      opacity: 0.15
    }
  }));

  return (
      <BackgroundBox>
        <Navbar/>
        <Wrapper>
          <HeroSection />
          <WorkSection />
          <SkillSection />
          <ContactSection />
        </Wrapper>
      </BackgroundBox>
  );
}

export default App;
