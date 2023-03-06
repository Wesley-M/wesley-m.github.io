import {alpha, Button, styled} from "@mui/material";
import {Link} from "react-router-dom";

export const Logo = styled(Link)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontWeight: 800,
    fontSize: '1.1em',
    color: theme.palette.text.main
  },
  textDecoration: 'none'
}));

export const NavLink = styled(Button)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: alpha(theme.palette.text.main, 0.9),
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.9em'
  },
}));