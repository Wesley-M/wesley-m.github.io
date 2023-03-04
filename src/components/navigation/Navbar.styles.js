import {alpha, Button, styled} from "@mui/material";
import {Link} from "react-router-dom";

export const Logo = styled(Link)(() => ({
  '& .MuiTypography-root': {
    fontWeight: 800,
    fontSize: '1.1em'
  },
  textDecoration: 'none'
}));

export const NavLink = styled(Button)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: alpha(theme.palette.text.main, 0.6),
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.9em'
  },
}));