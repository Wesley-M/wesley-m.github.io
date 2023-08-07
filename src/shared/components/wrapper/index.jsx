import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  marginBottom: '5em',
  padding: '1.5em',
  top: 0,
  width: '80%',
  margin: '0 10%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    margin: '0 5%',
    height: '100%',
  },
}));
