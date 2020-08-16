import { useContext } from "react"

import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

import styles from "./SkillsContainer.module.css"

/** @jsx jsx */
import { jsx } from '@emotion/core'

const imagesContext = require.context('../../static/icons/skills', true)

function SkillsContainer({ type, skills }) {

    const {theme} = useContext(ThemeContext)

    const imgs = skills.map(src => (
        <img src={imagesContext(`./${src}`)} alt=""/>
    ))

    return (
        <div className={styles.SkillsContainer} css={inlineStyles(theme).skillsContainer}>
            <p className={styles.skillType}>{type}</p>
            <div className={styles.skills}>
                {imgs}
            </div>
        </div>
    )
}

const inlineStyles = (theme) => {
    return {
        skillsContainer: {
            boxShadow: `-2px -2px 5px ${addOpacity(theme.light, 30)},
                        2px 2px 5px ${addOpacity(theme.dark, 30)}`
        }
    }
}

export default SkillsContainer