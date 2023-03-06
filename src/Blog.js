import React from 'react';

import {Box} from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import {Wrapper} from "./shared/components/Wrapper";

import {Outlet} from "react-router-dom";

function Blog() {

  return (
    <Box sx={{ backgroundColor: 'primary.main', minHeight: "100%" }}>
      <Navbar/>
      <Wrapper>
        <Outlet/>
      </Wrapper>
    </Box>
  );
}

export default Blog;