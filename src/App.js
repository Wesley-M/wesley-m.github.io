import React from 'react';
import HeroSection from './hero/HeroSection'
import WorkSection from './works/WorkSection'
import SkillSection from './skills/SkillSection'
import ContactSection from './contacts/ContactSection'
import TabbedMenu from './navigation/TabbedMenu'

import './App.css'

function App() {
  return (
    <div className="App">
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

export default App;
