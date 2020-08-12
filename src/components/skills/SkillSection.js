import React from 'react'

import {ReactComponent as ES6} from '../../static/icons/skills/es6.svg'
import {ReactComponent as Java} from '../../static/icons/skills/java.svg'
import {ReactComponent as Python} from '../../static/icons/skills/python.svg'
import {ReactComponent as CPlusPlus} from '../../static/icons/skills/c++.svg'
import {ReactComponent as HTML} from '../../static/icons/skills/html.svg'
import {ReactComponent as CSS} from '../../static/icons/skills/css.svg'
import {ReactComponent as REACT} from '../../static/icons/skills/react.svg'
import {ReactComponent as VSCode} from '../../static/icons/skills/vscode.svg'

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