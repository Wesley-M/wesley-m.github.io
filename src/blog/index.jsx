import React from 'react';

import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';
import { Navbar } from '../shared/components/navbar';
import { Wrapper } from '../shared/components/wrapper';

function Blog () {
  return (
    <Box sx={{ backgroundColor: 'primary.main', minHeight: '100%' }}>
      <Navbar isBlog={true} />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Box>
  );
}

export default Blog;
