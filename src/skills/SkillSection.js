import React from 'react'

import {ReactComponent as ES6} from '../assets/icons/skills/es6.svg'
import {ReactComponent as Java} from '../assets/icons/skills/java.svg'
import {ReactComponent as Python} from '../assets/icons/skills/python.svg'
import {ReactComponent as CPlusPlus} from '../assets/icons/skills/c++.svg'
import {ReactComponent as HTML} from '../assets/icons/skills/html.svg'
import {ReactComponent as CSS} from '../assets/icons/skills/css.svg'
import {ReactComponent as REACT} from '../assets/icons/skills/react.svg'
import {ReactComponent as VSCode} from '../assets/icons/skills/vscode.svg'

import SkillsContainer from './SkillsContainer'

import styles from './SkillSection.module.css'

function SkillSection() {
    return (
        <section className={styles.SkillSection} id="skills">
            <h1 className="sectionTitle">Skills</h1>
            <SkillsContainer type="LANGUAGES">
                <ES6 />
                <Java />
                <Python />
                <CPlusPlus />
                <HTML/>
                <CSS />
            </SkillsContainer>
            <SkillsContainer type="FRAMEWORKS">
                <REACT />
            </SkillsContainer>
            <SkillsContainer type="TOOLS">
                <VSCode />
            </SkillsContainer>
        </section>
    )
}

export default SkillSection