import { Box, Stack, styled, Typography } from '@mui/material';

export const PostHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  opacity: 0.7,
  fontSize: '0.9em',
  marginBottom: '2em',
}));

export const PostWrapper = styled(Box)(({ theme }) => ({
  width: '70%',
  margin: '6em 15%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '6em 0',
  },
}));

export const PostTags = styled(Stack)(({ theme }) => ({
  marginBottom: '-2.5em',
  flexDirection: 'row',
}));

export const PostTag = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  fontSize: '0.8em',
  letterSpacing: '0.025em',
  opacity: 0.9,
}));
