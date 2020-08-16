import {useContext} from 'react'

/** @jsx jsx */
import {jsx} from '@emotion/core'

import AssignmentIndex from '@material-ui/icons/AssignmentInd';
import Computer from '@material-ui/icons/Computer';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';

import Scroll from '../../utils/components/Scroll'

import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'

import styles from './TabbedMenu.module.css'

function TabbedMenu() {
  const {theme} = useContext(ThemeContext)
  const {content} = useContext(ContentContext)

  const onClickHandler = (target) => Scroll(target, { duration: 1000 })

  return (
      <ul className={styles.tabbedMenu} css={inlineStyles(theme).tabbedMenu}>
          <li onClick={() => onClickHandler('#home')}>
              <Home />
              <span>{content.navigation.home}</span>
          </li>
          <li onClick={() => onClickHandler('#works')}>
              <Work />
              <span>{content.navigation.works}</span>
          </li>
          <li onClick={() => onClickHandler('#skills')}>
              <Computer />
              <span>{content.navigation.skills}</span>
          </li>
          <li onClick={() => onClickHandler('#contact')}>
              <AssignmentIndex /> 
              <span>{content.navigation.contact}</span>
          </li>
      </ul>
  )
}

const inlineStyles = (theme) => {
    return {
      tabbedMenu: {
        backgroundColor: theme.light,
        color: theme.contentForeColor
      }
    }
  }


export default TabbedMenu