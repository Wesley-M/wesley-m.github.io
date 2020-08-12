import React, {createContext, useState} from "react"
import themes from '../static/db/themes.json'

const ThemeContext = createContext()

function ThemeProvider(props) {
    let [themeId, setThemeId] = useState("dark")
    let [theme, setTheme] = useState(themes["dark"])

    function toggleTheme () {
        let newThemeId = (themeId === "dark") ? "light" : "dark"
        let newTheme = (newThemeId === "dark") ? themes["dark"] : themes["light"]
        setThemeId(newThemeId)
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{themeId, theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}