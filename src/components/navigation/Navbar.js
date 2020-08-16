import React, { useContext } from 'react'
import Switch from './Switch'
import styles from './Navbar.module.css'

import enIcon from '../../static/icons/en.svg'
import ptIcon from '../../static/icons/pt.svg'
import moonIcon from '../../static/icons/moon.svg'
import sunIcon from '../../static/icons/sun.svg'

import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'

function Navbar() {

    const { toggleTheme } = useContext(ThemeContext)
    const { toggleLanguage } = useContext(ContentContext)

    return (
        <nav className={styles.navbar}>
            <span className={styles.logo}>
                Wesley Santos
            </span>
            
            <ul className={styles.generalNavigation}>
                <li> <a href="#">SKILLS</a> </li>
                <li> <a href="#">WORKS</a> </li>
                <li> <a href="#">CONTACTS</a> </li>
            </ul>

            <ul className={styles.switchNavigation}>
                <li> 
                    <Switch 
                        turnOnImg={enIcon} 
                        turnOffImg={ptIcon} 
                        turnOnAction={toggleLanguage}
                        turnOffAction={toggleLanguage}  
                    /> 
                </li>
                <li> 
                    <Switch 
                        turnOnImg={moonIcon} 
                        turnOffImg={sunIcon} 
                        turnOnAction={toggleTheme}
                        turnOffAction={toggleTheme} 
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar