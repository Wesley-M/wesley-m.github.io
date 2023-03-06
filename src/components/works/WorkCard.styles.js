import {alpha, Grid, Stack, styled, Typography} from "@mui/material";


export const CardContainer = styled(Grid)(({theme}) => ({
  margin: "1.5em 0em",
  borderRadius: "0.5em",
  backgroundColor: alpha(theme.palette.text.main, 0.05)
}));

export const CardImage = styled("img")(({theme}) => ({
  width: "100%",
  height: "100%",
  [theme.breakpoints.up('xs')]: {
    borderRadius: "0.5em 0.5em 0 0"
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '0.5em 0 0 0.5em'
  }
}));

export const CardContent = styled(Stack)(({theme}) => ({
  padding: "0.8em 0",
  marginLeft: "1.5em",
  paddingRight: "1.5em",
  height: "100%",
  flexDirection: "column"
}));

export const CardTitle = styled(Typography)(({theme}) => ({
  fontWeight: "600",
  fontSize: "1.3em",
  color: theme.palette.text.main
}));

export const CardDescription = styled(Typography)(({theme}) => ({
  marginTop: "0.4em",
  fontWeight: "400",
  color: alpha(theme.palette.text.main, 0.6),
  paddingBottom: "1em",
  [theme.breakpoints.up('xs')]: {
    fontSize: "0.95em"
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "1em"
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "1.05em"
  }
}));