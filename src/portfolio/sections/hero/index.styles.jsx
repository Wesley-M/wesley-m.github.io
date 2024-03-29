import { Box, keyframes, Stack, styled, Typography } from '@mui/material';

export const HeroContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    height: '25em',
  },
  [theme.breakpoints.up('md')]: {
    height: '15em',
  },
  display: 'flex',
  marginTop: '6em',
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
}));

export const ProfileImageContainer = styled(Stack)(() => ({
  width: 'fit-content',
  minHeight: '2em',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ProfileImage = styled('img')(() => ({
  width: '12em',
  height: '12em',
  borderRadius: '0.75em',
}));

export const IntroductionContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
}));

export const Introduction = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
}));

export const ProfileName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: '1.7em',
  fontWeight: 700,
  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export const Occupation = styled(Typography)(({ theme }) => ({
  fontSize: '1.2em',
  fontWeight: 600,
  color: theme.palette.secondary.main,
  marginTop: '0.5em',
  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

export const MessageContainer = styled(Box)(({ theme }) => ({
  height: '6em',
  marginTop: '1em',
  padding: '1em 1em',
  [theme.breakpoints.up('md')]: {
    borderLeft: `4px solid ${theme.palette.text.main}`,
  },
}));

export const Message = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  margin: 0,
  marginBottom: '1em',
  height: '1em',
  width: 'auto',
  fontSize: '1.2em',
  fontWeight: 400,
  fontStyle: 'italic',
  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Waving = styled(Typography)(({ theme }) => ({
  '& path': {
    fill: theme.palette.text.main,
  },
  'top': '0.25em',
  'position': 'relative',
  'marginLeft': '0.75em',
  'width': 'fit-content',
  'display': 'inline-flex',
  'animation': `${wave} 3s ease-out infinite`,
}));
