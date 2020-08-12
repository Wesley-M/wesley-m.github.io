import React, { useContext } from 'react'
import Navbar from '../navigation/Navbar'
import Typed from './Typed'

import {ReactComponent as ArrowIcon} from '../../static/icons/Arrow.svg'

import Work from '@material-ui/icons/Work'
import ViewList from '@material-ui/icons/ViewList'

import styles from './HeroSection.module.css'

import {ThemeContext} from '../../contexts/ThemeContext'
import { addOpacity } from '../../utils/styles'

/** @jsx jsx */
import { jsx } from '@emotion/core'

function HeroSection() {

    const {theme} = useContext(ThemeContext)

    return (
        <section className={styles.heroContainer} id="home">
            <Navbar />

            <h1 className={styles.title}> 
                Let's create something <Typed>awesome !</Typed> 
            </h1>

            <p className={styles.profession} css={localStyles(theme).profession}> 
                <ArrowIcon />
                Fullstack web developer 
            </p>

            <p className={styles.briefDescription} css={localStyles(theme).description}>
               Welcome! I am a developed based in Campina Grande (Brazil) who loves
               building awesome experiences. Let's view my work ?
            </p>

            <div className={styles.callToActions}>
                <button css={localStyles(theme).button}> <Work /> Works </button>
                <button css={localStyles(theme).button}> <ViewList /> Curriculum </button>
            </div>
        </section>
    )
}

const localStyles = (theme) => {
    return {
        profession: {
            color: addOpacity(theme.contentForeColor, 85)
        },
        description: {
            color: addOpacity(theme.contentForeColor, 70)
        },
        button: {
            color: addOpacity(theme.contentForeColor),
            backgroundColor: addOpacity(theme.contentForeColor, 20)
        }
    }
}

export default HeroSection