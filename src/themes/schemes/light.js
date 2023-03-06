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
    colors: {
        gold: "#FFDD2B",
        silver: "#E8EBF0",
        bronze: "#F19E3D",
        experiences: {
            text: "#FFFFFF"
        },
        work: {
            background: "#FFFFFF"
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
