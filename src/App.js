import React, { useContext } from 'react';

import ContactSection from './components/contacts/ContactSection';
import HeroSection from './components/hero/HeroSection';
import SkillSection from './components/skills/SkillSection';
import WorkSection from './components/works/WorkSection';

import './App.css';
import {Box, styled} from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import Background from "./static/images/background.jpg";
import BottomMenu from "./components/navigation/BottomMenu";
import {Wrapper} from "./shared/Wrapper";

function App() {

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
        </Wrapper>
        <ContactSection />
        <BottomMenu/>
      </BackgroundBox>
  );
}

export default App;
