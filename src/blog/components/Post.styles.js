import {Box, styled, Typography} from "@mui/material";

export const PostHeader = styled(Typography)(({theme}) => ({
  color: theme.palette.text.main,
  opacity: 0.7,
  fontSize: '0.9em',
  marginBottom: '-1.5em'
}));

export const PostWrapper = styled(Box)(({ theme }) => ({
  top: 0,
  width: '70%',
  margin: '6em 15%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '6em 0'
  }
}))