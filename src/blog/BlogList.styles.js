import {Stack, styled} from "@mui/material";

export const BlogListContainer = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%'
  },
  marginTop: "5em"
}));