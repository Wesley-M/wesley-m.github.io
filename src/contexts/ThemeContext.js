import React, {createContext, useState} from "react"
import themes from '../static/db/themes.json'

const ThemeContext = createContext()

function ThemeProvider(props) {
    let [variantId, setVariantId] = useState("dark")
    let [variant, setVariant] = useState(themes["dark"])

    function toggleVariant () {
        let newVariantId = (variantId === "dark") ? "light" : "dark"
        let newTheme = (newVariantId === "dark") ? themes["dark"] : themes["light"]
        setVariantId(newVariantId)
        setVariant(newTheme)
    }

    return (
        <ThemeContext.Provider value={{variantId, variant, toggleVariant}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}