import {styled, Typography} from "@mui/material";

export const Section = styled(Typography)(({theme}) => ({
  color: theme.palette.text.main,
  fontSize: "1.8em",
  fontWeight: 600,
  margin: "0 1em 0 0"
}));