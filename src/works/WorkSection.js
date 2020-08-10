import React from 'react'
import WorkCard from './WorkCard'

import im1 from '../assets/images/im1.png'
import im2 from '../assets/images/im2.png'
import im3 from '../assets/images/im3.png'

import styles from "./WorkSection.module.css"

function WorkSection() {
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
            <div className={styles.pagination}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </section>
    )
}

export default WorkSection