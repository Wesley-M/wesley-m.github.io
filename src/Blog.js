import React from 'react';

import {Box, ThemeProvider} from "@mui/material";
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import Navbar from "./components/navigation/Navbar";
import {Wrapper} from "./shared/components/Wrapper";

import {Outlet} from "react-router-dom";

function Blog() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ backgroundColor: 'primary.main', minHeight: "100%" }}>
        <Navbar/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
      </Box>
    </ThemeProvider>
  );
}

export default Blog;