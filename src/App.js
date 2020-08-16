import {useContext} from 'react';

import HeroSection from './components/hero/HeroSection'
import WorkSection from './components/works/WorkSection'
import SkillSection from './components/skills/SkillSection'
import ContactSection from './components/contacts/ContactSection'
import TabbedMenu from './components/navigation/TabbedMenu'

import {ThemeContext} from './contexts/ThemeContext'
import {addOpacity} from './utils/styles'

/** @jsx jsx */
import { jsx, Global } from '@emotion/core'

import './App.css'

function App() {
  
  const {theme} = useContext(ThemeContext)

  setBodyBackgroundColor(theme);

  return (
    <GlobalStyles theme={theme}>
      <div className="wrapper">
        <HeroSection />
        <WorkSection />
        <SkillSection />
        <ContactSection />
      </div>
      <TabbedMenu />
    </GlobalStyles>
  );
}

function GlobalStyles({theme, children}) {
  return (
    <div className="app">
      <Global styles={{
          '.sectionTitle': {
            textShadow: `0 2px 2px ${addOpacity(theme.dark, 25)}`
          },
          '.wrapper': {
            color: addOpacity(theme.headerForeColor)
          }
        }}
      />
      {children}
    </div>
  )
}

function setBodyBackgroundColor(theme, opacity = 100) {
  const body = document.querySelector("body")
  body.style.backgroundColor = addOpacity(theme.mainBackColor, opacity)
}

export default App;
