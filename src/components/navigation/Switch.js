import React, { useState, useContext } from 'react';

import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

import styles from './Switch.module.css'

/** @jsx jsx */
import { jsx } from '@emotion/core'

/**
 * Component for switching between defined actions
 *
 * @component
 */

const Switch = ({ turnOnImg, turnOffImg, turnOnAction, turnOffAction }) => {
  const [selected, setSelected] = useState('turned-off');

  const {theme} = useContext(ThemeContext)

  function getSliderClasses() {
    let sliderClasses = [styles.slider];
    sliderClasses.push(
      (selected === 'turned-on') ? 
      styles.turnOn : 
      styles.turnOff
    )
    return sliderClasses
  }

  function clickHandler() {
    const newSliderPosition = (selected === 'turned-on') ? 'turned-off' : 'turned-on';
    setSelected(newSliderPosition);
    if (selected === 'turned-on') { 
      turnOnAction()
    } else { 
      turnOffAction() 
    }
  }

  return (
      <div className={styles.Switch} css={getSwitchColor(theme, 50)}>
          <span className={styles.turnOption} onClick={clickHandler}>
            <img 
              src={turnOnImg} 
              className={styles.turnOptionImg}
              alt="turn-on"/>
          </span>

          <span className={styles.turnOption} onClick={clickHandler}>
            <img 
              src={turnOffImg} 
              className={styles.turnOptionImg} 
              alt="turn-off"/>
          </span> 

          <span 
            className={getSliderClasses().join(' ')}
            css={getSliderColor(theme)} 
            onClick={clickHandler}>
          </span>
      </div>
  );
}

function getSwitchColor(theme, opacity = 100) {
  return {
    backgroundColor: addOpacity(theme.light, opacity)
  }
}

function getSliderColor(theme, opacity = 100) {
  return {
    backgroundColor: addOpacity(theme.headerForeColor, opacity)
  }
}

export default Switch;