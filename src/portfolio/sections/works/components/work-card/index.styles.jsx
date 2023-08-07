import styled from '@emotion/styled';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Stack } from '@mui/material';

import React from 'react';

export const CardContainer = styled(Stack)(() => ({
  minWidth: '160px',
  minHeight: '160px',
  position: 'relative',
}));

export const Image = styled('img')(({ theme }) => ({
  width: '60px',
  height: '60px',
}));

export const ExploreButton = styled(Button)(({ theme }) => ({
  'fontWeight': 'bold',
  'borderRadius': '2em',
  'borderWidth': 1,
  '&:hover': { borderWidth: 1 },
  'padding': '0.25em 1.5em',
}));

export const AnimatedRightArrow = (
  <ArrowRightAltIcon
    sx={{
      'animation': 'spin 1.5s ease-out infinite',
      '@keyframes spin': {
        '0%': {
          transform: 'translateX(0px)',
        },
        '100%': {
          transform: 'translateX(3px) scaleX(1.5)',
        },
      },
    }}
  />
);
