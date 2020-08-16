import React, {createContext, useState} from "react"
import contents from '../static/db/content-all-lang.json'

const ContentContext = createContext()

function ContentProvider(props) {
    let [contentId, setContentId] = useState("en")
    let [content, setContent] = useState(contents["en"])

    function toggleLanguage () {
        let newContentId = (contentId === "en") ? "pt-br" : "en"
        let newContent = (newContentId === "pt-br") ? contents["pt-br"] : contents["en"]

        setContentId(newContentId)
        setContent(newContent)
    }

    return (
        <ContentContext.Provider value={{contentId, content, toggleLanguage}}>
            {props.children}
        </ContentContext.Provider>
    )
}

export {ContentProvider, ContentContext}