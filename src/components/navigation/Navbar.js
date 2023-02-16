import React, { useContext } from 'react'

import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'
import LanguageSelector from "./LanguageSelector";
import {AppBar, Box, Button, styled, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

function Navbar() {

  const Logo = styled(Link)(() => ({
    fontWeight: 800,
    fontSize: '1.1em',
    textDecoration: 'none',
    color: '#282828BB',
    fontFamily: 'Nunito, sans-serif'
  }));

  const NavLink = styled(Button)(() => ({
    color: '#282828BB',
    fontWeight: 'bold',
    fontFamily: 'Nunito, sans-serif'
  }));

  const { toggleTheme } = useContext(ThemeContext)
  const { contentId, toggleLanguage } = useContext(ContentContext)

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
            sx={{ backgroundColor: 'white', color: 'red' }}
            position="fixed"
            elevation={0}
        >
          <Toolbar sx={{ margin: '0 10%' }}>
            <Logo to="/">
              Wesley Santos
            </Logo>

            <Box sx={{ flexGrow: 16 }} />

            <Box sx={{ display: {xs: 'none', sm: 'flex'} }}>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <NavLink>Blog</NavLink>
              </Link>
              <NavLink href="/#works">Works</NavLink>
              <NavLink href="/#skills">Skills</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <LanguageSelector
                language={contentId}
                toggleLanguage={toggleLanguage}
            />
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar