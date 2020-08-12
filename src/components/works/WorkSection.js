import React, { useContext } from 'react'
import WorkCard from './WorkCard'

import im1 from '../../static/images/im1.png'
import im2 from '../../static/images/im2.png'
import im3 from '../../static/images/im3.png'

import {ThemeContext} from '../../contexts/ThemeContext'
import { addOpacity } from '../../utils/styles'

import styles from "./WorkSection.module.css"

/** @jsx jsx */
import { jsx } from '@emotion/core'

function WorkSection() {

    const {theme} = useContext(ThemeContext)

    return (
        <section className={styles.WorkSection} id="works">
            <h1 className="sectionTitle">My Works</h1>
            <div className={styles.cardList}>
                <WorkCard 
                    img={im1} 
                    title="Lorem Ipsum" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Eg vestibulum aliquam, venenatis, feugiat. Hac ac in sociis 
                                etiam vitae, ultrices semper. Risus vitae tincidunt libero."
                    tags={["javascript", "game"]} 
                />
                <WorkCard 
                    img={im2} 
                    title="Lorem" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Eg vestibulum aliquam, venenatis, feugiat."
                    tags={["javascript", "literature"]} 
                />
                <WorkCard 
                    img={im3} 
                    title="Lorem Ipsum" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    tags={["javascript", "classic"]} 
                />
            </div>
            <div className={styles.pagination} css={getPaginationColor(theme)}>
                <span css={getPageColor(theme, 40)}>1</span>
                <span css={getPageColor(theme, 40)}>2</span>
                <span css={getPageColor(theme, 40)}>3</span>
            </div>
        </section>
    )
}

function getPaginationColor(theme, opacity = 100) {
    return {
        color: addOpacity(theme.contentForeColor)
    }
}

function getPageColor(theme, opacity = 100) {
    return {
        backgroundColor: addOpacity(theme.headerForeColor, opacity)
    }
}

export default WorkSection