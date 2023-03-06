import {alpha, Grid, styled, Typography} from "@mui/material";

export const PreviewContainer = styled(Grid)(({theme}) => ({
  borderRadius: '0.25em',
  border: `2px solid ${alpha(theme.palette.text.main, 0.1)}`
}));

export const CardTitle = styled(Typography)(({theme}) => ({
  color: theme.palette.text.main,
  fontSize: '1.4em',
  fontFamily: 'Raleway, sans-serif',
  opacity: 0.95,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6em'
  }
}));

export const UpdatedAt = styled(Typography)(({theme}) => ({
  color: theme.palette.text.main,
  fontSize: '0.85em',
  marginTop: '0.2em',
  opacity: 0.6,
  "& time": {
    color: theme.palette.text.main,
    fontFamily: theme.typography.allVariants.fontFamily
  }
}));

export const Description = styled(Typography)(({theme}) => ({
  color: theme.palette.text.main,
  fontSize: '0.95em',
  opacity: 0.7,
  margin: '1em 0',
}));

export const Tag = styled(Typography)(({theme}) => ({
  padding: '0.1em 0.6em',
  fontWeight: 'bold',
  fontSize: '0.9em',
  borderRadius: '0.2em',
  color: theme.colors.work.background,
  backgroundColor: theme.palette.secondary.main
}));