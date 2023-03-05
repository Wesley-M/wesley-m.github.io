import {Grid, styled, Typography} from "@mui/material";

export const PreviewContainer = styled(Grid)(({theme}) => ({
  borderRadius: '0.25em',
  border: '2px solid #28282810'
}));

export const CardTitle = styled(Typography)(({theme}) => ({
  fontSize: '1.4em',
  fontFamily: 'Raleway, sans-serif',
  opacity: 0.95,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6em'
  }
}));

export const UpdatedAt = styled(Typography)(({theme}) => ({
  fontSize: '0.85em',
  marginTop: '0.2em',
  opacity: 0.6
}));

export const Description = styled(Typography)(({theme}) => ({
  fontSize: '0.95em',
  opacity: 0.7,
  margin: '1em 0',
}));

export const Tag = styled(Typography)(() => ({
  padding: '0.1em 0.6em',
  fontWeight: 'bold',
  fontSize: '0.9em',
  borderRadius: '0.2em',
  fontFamily: 'Nunito, sans-serif',
  color: '#F1F1F1',
  backgroundColor: '#1D7FC6'
}));