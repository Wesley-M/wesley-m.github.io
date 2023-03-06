import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from './schemes';
import {ThemeProvider} from "@mui/material";

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

/**
 * Simplifying the use of the context with a hook
 * */
export const useThemeContext = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return {
    changeTheme,
    isDarkTheme: theme === 'dark'
  }
}