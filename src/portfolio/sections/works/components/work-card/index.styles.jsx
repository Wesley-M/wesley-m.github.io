import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';

import React from 'react';

export const CardContainer = styled(Stack)(() => ({
  minWidth: '160px',
  minHeight: '160px',
  position: 'relative',
}));

export const ExploreButton = styled(Button)(({ theme }) => ({
  'fontWeight': 'bold',
  'borderRadius': '2em',
  'borderWidth': 1,
  '&:hover': { borderWidth: 1 },
  'padding': '0.25em 1.5em',
}));
