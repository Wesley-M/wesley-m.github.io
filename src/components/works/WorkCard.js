import { useContext } from "react"

/** @jsx jsx */
import { jsx } from '@emotion/core'

import styles from "./WorkCard.module.css"
import { ThemeContext } from '../../contexts/ThemeContext'
import { ContentContext } from '../../contexts/ContentContext'
import { addOpacity } from '../../utils/styles'

const images = require.context('../../static/images', true)

function WorkCard({ img, title, description, tags }) {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    function arrayToTags(tags) {
        return tags.map(tag => ( <span key={tag} css={inlineStyles(theme).tag}>#{tag}</span> ));
    }

    return (
        <div className={styles.WorkCard} css={inlineStyles(theme).workCard}>
            <img src={images(`./${img}`)} alt=""/>
            <div className={styles.cardInfo}>
                <span className={styles.title}>{title}</span>
                <p className={styles.description}>{description}</p>
                <div className={styles.tagList}>
                    {arrayToTags(tags)}
                </div>
                <button css={inlineStyles(theme).button}>{content.works["visit-btn"]}</button>
            </div>
        </div>
    )
}

const inlineStyles = (theme) => {
    return {
        workCard: {
            backgroundColor: addOpacity(theme.contentForeColor, 10),
            color: theme.contentForeColor
        },
        tag: {
            backgroundColor: theme.headerForeColor
        },
        button: {
            backgroundColor: addOpacity(theme.dark, 30)
        }
    }
}

export default WorkCard