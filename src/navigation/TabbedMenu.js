import React from 'react'

import Scroll from '../common/Scroll'

import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Computer from '@material-ui/icons/Computer';
import AssignmentIndex from '@material-ui/icons/AssignmentInd';

import styles from './TabbedMenu.module.css'

function TabbedMenu() {

    const onClickHandler = (target) => Scroll(target, {duration: 1000});

    return (
        <ul className={styles.tabbedMenu}>
            <li onClick={() => onClickHandler("#home")}>
                <Home />
                <span>Home</span>
            </li>
            <li onClick={() => onClickHandler("#works")}>
                <Work />
                <span>Works</span>
            </li>
            <li onClick={() => onClickHandler("#skills")}>
                <Computer />
                <span>Skills</span>
            </li>
            <li onClick={() => onClickHandler("#contact")}>
                <AssignmentIndex /> 
                <span>Contact</span>
            </li>
        </ul>
    )
}

export default TabbedMenu