import { alpha, Stack, styled, Typography } from '@mui/material';

export const AboutContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.main, 0.1),
  padding: '2em 1em',
  borderRadius: '0.25em',
  flexDirection: 'row',
}));

export const AboutImage = styled('img')(({ theme }) => ({
  width: '5em',
  height: '5em',
  borderRadius: '2.5em',
  marginRight: '1em',
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  opacity: 0.9,
  marginBottom: '0.5em',
  color: theme.palette.text.main,
}));

export const AboutContent = styled(Typography)(({ theme }) => ({
  fontSize: '0.9em',
  opacity: 0.8,
  color: alpha(theme.palette.text.main, 0.9),
}));
