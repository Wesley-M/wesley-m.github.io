import React from 'react';

import {Box, ThemeProvider} from "@mui/material";
import { lightTheme } from './themes/light';
import Navbar from "./components/navigation/Navbar";
import {Wrapper} from "./shared/Wrapper";

import {BlogList} from "./blog/BlogList";
import posts from "./blog/posts/metadata";

function Blog() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Navbar/>
        <Wrapper>
          <BlogList posts={posts}/>
        </Wrapper>
      </Box>
    </ThemeProvider>
  );
}

export default Blog;