import React, {useContext} from 'react'

import Scroll from '../../utils/components/Scroll'

import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Computer from '@material-ui/icons/Computer';
import AssignmentIndex from '@material-ui/icons/AssignmentInd';

import styles from './TabbedMenu.module.css'

import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

/** @jsx jsx */
import { jsx } from '@emotion/core'

function TabbedMenu() {
    
    const {theme} = useContext(ThemeContext)

    const onClickHandler = (target) => Scroll(target, {duration: 1000});

    return (
        <ul className={styles.tabbedMenu} css={getTabbedMenuColors(theme, 100)}>
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

function getTabbedMenuColors(theme, opacity) {
    return {
        backgroundColor: addOpacity(theme.light, opacity),
        color: theme.contentForeColor
    }
}

export default TabbedMenu