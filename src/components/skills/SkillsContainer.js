import React, { useContext } from "react"

import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

import styles from "./SkillsContainer.module.css"

/** @jsx jsx */
import { jsx } from '@emotion/core'

function SkillsContainer({ type, children }) {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={styles.SkillsContainer} css={getBoxShadow(theme, 30)}>
            <p className={styles.skillType}>{type}</p>
            <div className={styles.skills}>
                {children}
            </div>
        </div>
    )
}

function getBoxShadow(theme, opacity = 100) {
    return {
        boxShadow: `-2px -2px 5px ${addOpacity(theme.light, opacity)},
                     2px 2px 5px ${addOpacity(theme.dark, opacity)}`
    }
}

export default SkillsContainer