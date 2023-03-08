import React from 'react';

import {Box} from "@mui/material";
import Navbar from "./components/navigation/Navbar";
import {Wrapper} from "./components/layout/Wrapper";

import {Outlet} from "react-router-dom";

function Blog() {

  return (
    <Box sx={{ backgroundColor: 'primary.main', minHeight: "100%" }}>
      <Navbar isBlog={true}/>
      <Wrapper>
        <Outlet/>
      </Wrapper>
    </Box>
  );
}

export default Blog;