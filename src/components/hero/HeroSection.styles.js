import {Box, Grid, keyframes, Stack, styled, Typography} from "@mui/material";


export const HeroContainer = styled(Grid)(({theme}) => ({
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    height: "70vh",
  },
  [theme.breakpoints.up('sm')]: {
    height: "60vh",
  },
  [theme.breakpoints.up('md')]: {
    height: "50vh",
  },
  marginTop: '5em',
  position: 'relative'
}));

export const ProfileImageContainer = styled(Grid)(() => ({
  width: "2em",
  height: "fit-content",
  minHeight: "2em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const ProfileImage = styled("img")(() => ({
  width: "16em",
  height: "16em",
  borderRadius: "1em"
}));

export const IntroductionContainer = styled(Grid)(({theme}) => ({
  display: "flex",
  [theme.breakpoints.up('xs')]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: "left",
  }
}));

export const Introduction = styled(Stack)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    marginLeft: "1.5em"
  },
  flexDirection: "column"
}));

export const ProfileName = styled(Typography)(({theme}) => ({
  fontSize: "1.9em",
  fontWeight: 700,
  [theme.breakpoints.up('xs')]: {
    textAlign: "center",
  },
  [theme.breakpoints.up('md')]: {
    textAlign: "left",
  }
}));

export const Occupation = styled(Typography)(({theme}) => ({
  fontSize: "1.4em",
  fontWeight: 600,
  color: theme.palette.secondary.main,
  marginTop: "0.5em",
  [theme.breakpoints.up('xs')]: {
    textAlign: "center",
  },
  [theme.breakpoints.up('md')]: {
    textAlign: "left",
  }
}));

export const MessageContainer = styled(Box)(({theme}) => ({
  height: "7em",
  marginTop: "1em",
  padding: "1em 1em",
  [theme.breakpoints.up('md')]: {
    borderLeft: `4px solid ${theme.palette.text.main}`
  }
}));

export const Message = styled(Typography)(({theme}) => ({
  margin: 0,
  marginBottom: "1em",
  height: '1em',
  width: 'auto',
  fontSize: '1.3em',
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

export const Waving = styled(Typography)(({theme}) => ({
  top: "0.25em",
  position: "relative",
  marginLeft: "0.75em",
  width: "fit-content",
  display: "inline-flex",
  animation: `${wave} 3s ease-out infinite`
}));

