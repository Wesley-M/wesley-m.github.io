import { useContext } from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/core'

import WorkCard from './WorkCard'

import styles from "./WorkSection.module.css"
import { addOpacity } from '../../utils/styles'

import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'

function WorkSection() {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    const cards = content.works.cards.map(work => (
        <WorkCard 
            key={work.id}
            img={work.image} 
            title={work.title} 
            description={work.description}
            tags={work.tags} 
        />
    ))

    return (
        <section className={styles.WorkSection} id="works">
            <h1 className="sectionTitle">{content.works.sectionTitle}</h1>
            <div className={styles.cardList}>
                {cards}
            </div>
            <div className={styles.pagination} css={inlineStyles(theme).pagination}>
                <span css={inlineStyles(theme).page}>1</span>
                <span css={inlineStyles(theme).page}>2</span>
                <span css={inlineStyles(theme).page}>3</span>
            </div>
        </section>
    )
}

const inlineStyles = (theme) => {
    return {
        pagination: {
            color: theme.contentForeColor
        },
        page: {
            backgroundColor: addOpacity(theme.headerForeColor, 40)
        }
    }
}

export default WorkSection