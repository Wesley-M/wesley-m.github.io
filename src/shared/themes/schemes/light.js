import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#d05324',
    },
    text: {
      main: '#333333',
    },
  },
  colors: {
    gold: '#d9b702',
    silver: '#93a2c2',
    bronze: '#9b5d0e',
    experiences: {
      text: '#FFFFFF',
    },
    work: {
      background: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Nunito, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});
