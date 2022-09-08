import { useContext } from 'react';

import AssignmentIndex from '@mui/icons-material/AssignmentInd';
import Computer from '@mui/icons-material/Computer';
import Home from '@mui/icons-material/Home';
import Work from '@mui/icons-material/Work';

import Scroll from '../../utils/components/Scroll';

import { ContentContext } from '../../contexts/ContentContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './TabbedMenu.module.css';

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