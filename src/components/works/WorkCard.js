import React, { useContext } from "react"

import {ThemeContext} from '../../contexts/ThemeContext'
import { addOpacity } from '../../utils/styles'

import styles from "./WorkCard.module.css"

/** @jsx jsx */
import { jsx } from '@emotion/core'

function WorkCard({ img, title, description, tags }) {

    const {theme} = useContext(ThemeContext)

    function arrayToTags(tags) {
        return tags.map(tag => ( <span key={tag} css={getTagColor(theme, 100)}>#{tag}</span> ));
    }

    return (
        <div className={styles.WorkCard} css={getWorkCardColor(theme, 10)}>
            <img src={img} alt=""/>
            <div className={styles.cardInfo}>
                <span className={styles.title}>{title}</span>
                <p className={styles.description}>{description}</p>
                <div className={styles.tagList}>
                    {arrayToTags(tags)}
                </div>
                <button css={getButtonColor(theme, 30)}>VISIT WORK</button>
            </div>
        </div>
    )
}

function getWorkCardColor(theme, opacity = 100) {
    return {
        backgroundColor: addOpacity(theme.contentForeColor, opacity),
        color: addOpacity(theme.contentForeColor)
    }
}

function getTagColor(theme, opacity = 100) {
    return {
        backgroundColor: addOpacity(theme.headerForeColor, opacity)
    }
}

function getButtonColor(theme, opacity = 100) {
    return {
        backgroundColor: addOpacity(theme.dark, opacity)
    }
}

export default WorkCard