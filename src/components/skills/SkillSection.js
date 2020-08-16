import React, { useContext } from 'react'
import SkillsContainer from './SkillsContainer'
import styles from './SkillSection.module.css'

import {ContentContext} from '../../contexts/ContentContext'

function SkillSection() {

    const {content} = useContext(ContentContext)

    const skillsContainers = content.skills.cards.map(skill => (
        <SkillsContainer key={skill.id} type={skill.type} skills={skill.images} />
    )) 

    return (
        <section className={styles.SkillSection} id="skills">
            <h1 className="sectionTitle">{content.skills.sectionTitle}</h1>
            {skillsContainers}
        </section>
    )
}

export default SkillSection