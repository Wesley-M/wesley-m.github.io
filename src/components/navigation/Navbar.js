import React from 'react'

import {AppBar, Box, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Logo, NavLink} from "./Navbar.styles";
import {ThemeSwitcher} from "../../themes/ThemeSwitcher";
import SwipeableTemporaryDrawer from "./Sidebar";

function Navbar({ isBlog }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
      >
        <Toolbar sx={{ margin: '0 10%', padding: '0 4px' }}>
          <Logo to={isBlog ? "/blog" : "/"}>
            <Typography>{isBlog ? "Blog" : "Portfolio"}</Typography>
          </Logo>

          <Box sx={{ flexGrow: 16 }} />

          <Box sx={{ display: { xs: 'none', sm: "flex" } , placeItems: 'center', gap: '1em' }}>
            <Link to={isBlog ? "/" : "/blog"} style={{ textDecoration: 'none' }}>
              <NavLink>
                <Typography>{isBlog ? "Portfolio" : "Blog"}</Typography>
              </NavLink>
            </Link>
            <NavLink href="/#/blog/who_am_i">
              <Typography>About</Typography>
            </NavLink>
            <NavLink href="mailto:wesleymatteus99@gmail.com">
              <Typography>Contact Me</Typography>
            </NavLink>
            <ThemeSwitcher/>
          </Box>

          <Stack direction="row" gap={2} sx={{ display: { xs: 'flex', sm: "none" } }}>
            <ThemeSwitcher/>
            <SwipeableTemporaryDrawer/>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;