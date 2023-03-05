import React from 'react';

import {Box, ThemeProvider} from "@mui/material";
import { lightTheme } from './themes/light';
import Navbar from "./components/navigation/Navbar";
import {Wrapper} from "./shared/components/Wrapper";

import {Outlet} from "react-router-dom";

function Blog() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Navbar/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
      </Box>
    </ThemeProvider>
  );
}

export default Blog;