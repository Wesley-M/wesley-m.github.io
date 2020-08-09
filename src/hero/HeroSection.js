import React from 'react'
import Navbar from '../navigation/Navbar'
import Button from '../common/Button'
import Typed from '../common/Typed'

import {ReactComponent as ArrowIcon} from '../assets/icons/Arrow.svg'

import Work from '@material-ui/icons/Work';
import ViewList from '@material-ui/icons/ViewList';


import styles from './HeroSection.module.css'

function HeroSection() {
    return (
        <section className={styles.heroContainer}>
            <Navbar />

            <h1 className={styles.title}> 
                Let's create something <Typed>awesome !</Typed> 
            </h1>

            <p className={styles.profession}> 
                <ArrowIcon />
                Fullstack web developer 
            </p>

            <p className={styles.briefDescription}>
               Hi, Welcome. I am a developed based in Campina Grande (Brazil). 
               I love building little games and awesome experiences. Let's view my work ?
            </p>

            <div className={styles.callToActions}>
                <Button> <Work /> Works </Button>
                <Button> <ViewList /> Curriculum </Button>
            </div>
        </section>
    )
}

export default HeroSection