import React from 'react'

import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Logo, NavLink} from "./Navbar.styles";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
      >
        <Toolbar sx={{ margin: '0 10%' }}>
          <Logo to="/">
            <Typography>Portfolio</Typography>
          </Logo>

          <Box sx={{ flexGrow: 16 }} />

          <Box>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <NavLink>
                <Typography>Blog</Typography>
              </NavLink>
            </Link>
            <NavLink href="mailto:wesleymatteus99@gmail.com">
              <Typography>Contact Me</Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;