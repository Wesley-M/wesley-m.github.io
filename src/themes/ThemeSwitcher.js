import SunIcon from '@mui/icons-material/Brightness7';
import MoonIcon from '@mui/icons-material/NightsStay';
import {IconButton, keyframes} from "@mui/material";
import {useThemeContext} from "./ThemeContext";

export const ThemeSwitcher = () => {
  const theme = useThemeContext();

  const spin = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  `;

  return (
    <IconButton
      onClick={theme.changeTheme}
      color="secondary"
      aria-label="change the site theme"
      sx={{
        opacity: 0.9,
        transition: "all 300ms ease",
        "&:hover": {
          opacity: 1,
          animation: `${spin} 4s infinite linear`
        }
      }}
    >
      {theme.isDarkTheme ? <MoonIcon/> : <SunIcon/>}
    </IconButton>
  )
}