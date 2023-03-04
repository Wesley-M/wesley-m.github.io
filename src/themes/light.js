import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
        secondary: {
            main: "#1D7FC6"
        },
        text: {
            main: "#282828"
        }
    },
    typography: {
        allVariants: {
            fontFamily: 'Nunito, sans-serif',
            textTransform: 'none',
            fontSize: 16,
        },
    }
});
