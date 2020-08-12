import React, {useContext} from 'react';

import HeroSection from './components/hero/HeroSection'
import WorkSection from './components/works/WorkSection'
import SkillSection from './components/skills/SkillSection'
import ContactSection from './components/contacts/ContactSection'
import TabbedMenu from './components/navigation/TabbedMenu'

import {ThemeContext} from './contexts/ThemeContext'
import {addOpacity} from './utils/styles'

/** @jsx jsx */
import { jsx } from '@emotion/core'

import './App.css'

function App() {
  
  const {theme} = useContext(ThemeContext)

  setBodyBackgroundColor(theme);

  return (
    <div css={getHeaderForeColor(theme)}>
      <div className="wrapper">
        <HeroSection />
        <WorkSection />
        <SkillSection />
        <ContactSection />
      </div>
      <TabbedMenu />
    </div>
  );
}

function setBodyBackgroundColor(theme, opacity = 100) {
  const body = document.querySelector("body")
  body.style.backgroundColor = addOpacity(theme.mainBackColor, opacity)
}

function getHeaderForeColor (theme, opacity = 100) {
  return {
    color: addOpacity(theme.headerForeColor, opacity)
  }
}

export default App;
