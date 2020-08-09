import React from 'react'

import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Computer from '@material-ui/icons/Computer';
import AssignmentIndex from '@material-ui/icons/AssignmentInd';

import styles from './TabbedMenu.module.css'

function TabbedMenu() {
    return (
        <ul className={styles.tabbedMenu}>
            <li className={styles.activeTab}>
                <Home />
                <span>Home</span>
            </li>
            <li>
                <Work />
                <span>Works</span>
            </li>
            <li>
                <Computer />
                <span>Skills</span>
            </li>
            <li>
                <AssignmentIndex /> 
                <span>Contact</span>
            </li>
        </ul>
    )
}

export default TabbedMenu