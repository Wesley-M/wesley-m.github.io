import {alpha, Button, keyframes, styled} from "@mui/material";
import {Link} from "react-router-dom";

const moveBg = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`

export const Logo = styled(Link)(({ theme }) => ({
  color: theme.palette.text.main,
  '&:hover': {
    '--bg-size': '400%',
    '--color-one': theme.palette.secondary.main,
    '--color-two': theme.palette.text.main,
    background: `linear-gradient(
      45deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
      ) 0 0 / var(--bg-size) 100%`,
    color: 'transparent',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    animation: `${moveBg} 1s linear 0.3`,
  },
  '& .MuiTypography-root': {
    fontWeight: 800,
    fontSize: '1.1em'
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