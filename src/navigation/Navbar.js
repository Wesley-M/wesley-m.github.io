import React from 'react'
import Switch from '../common/Switch'
import styles from './Navbar.module.css'

import usaIcon from '../assets/icons/usa-flag.svg'
import brazilIcon from '../assets/icons/brazil-flag.svg'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'

function Navbar() {
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
                        turnOnImg={usaIcon} 
                        turnOffImg={brazilIcon} 
                        turnOnAction={() => console.log("turned on")}
                        turnOffAction={() => console.log("turned off")} 
                    /> 
                </li>
                <li> 
                    <Switch 
                        turnOnImg={moonIcon} 
                        turnOffImg={sunIcon} 
                        turnOnAction={() => console.log("turned on")}
                        turnOffAction={() => console.log("turned off")} 
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar