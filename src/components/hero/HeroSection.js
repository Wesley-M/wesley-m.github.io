import { useContext } from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/core'

import Navbar from '../navigation/Navbar'
import Typed from './Typed'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ViewListIcon from '@material-ui/icons/ViewList'
import {ReactComponent as ArrowIcon} from '../../static/icons/Arrow.svg'

import styles from './HeroSection.module.css'
import { addOpacity } from '../../utils/styles'

import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'

function HeroSection() {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    return (
        <section className={styles.heroContainer} id="home">
            <Navbar />

            <h1 className={styles.title}> 
                {content.hero["slogan"]} 
                <Typed dataText={content.hero["slogan-options"]}  />
            </h1>

            <p className={styles.profession} css={inlineStyles(theme).profession}> 
                <ArrowIcon />
                {content.hero["profession"]}
            </p>

            <p className={styles.briefDescription} css={inlineStyles(theme).description}>
                {content.hero["briefDescription"]}
            </p>

            <div className={styles.callToActions}>
                <button css={inlineStyles(theme).button}> <ViewListIcon /> Curriculum </button>
                <button css={inlineStyles(theme).button}> <GitHubIcon /> </button>
                <button css={inlineStyles(theme).button}> <LinkedInIcon /> </button>
            </div>
        </section>
    )
}

const inlineStyles = (theme) => {
    return {
        profession: {
            color: addOpacity(theme.contentForeColor, 85)
        },
        description: {
            color: addOpacity(theme.contentForeColor, 60)
        },
        button: {
            color: addOpacity(theme.contentForeColor),
            backgroundColor: addOpacity(theme.contentForeColor, 20)
        }
    }
}

export default HeroSection