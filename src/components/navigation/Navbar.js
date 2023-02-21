import React, { useContext } from 'react'

import {AppBar, Box, Button, styled, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

function Navbar() {

  const Logo = styled(Link)(() => ({
    fontWeight: 800,
    fontSize: '1.1em',
    textDecoration: 'none',
    color: '#282828',
    fontFamily: 'Nunito, sans-serif'
  }));

  const NavLink = styled(Button)(() => ({
    color: 'rgba(40,40,40,0.8)',
    fontWeight: 700,
    margin: '0 1em',
    fontFamily: 'Nunito, sans-serif'
  }));

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
            sx={{ backgroundColor: 'white', color: 'red' }}
            position="fixed"
            elevation={0}
        >
          <Toolbar sx={{ margin: '0 10%' }}>
            <Logo to="/">
              Portfolio
            </Logo>

            <Box sx={{ flexGrow: 16 }} />

            <Box sx={{ display: {xs: 'none', sm: 'flex'} }}>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <NavLink>Blog</NavLink>
              </Link>
              <NavLink href="/#education">Education</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default Navbar