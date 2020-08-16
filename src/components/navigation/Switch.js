import { useState, useContext } from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core'

import styles from './Switch.module.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

const Switch = ({ turnOnImg, turnOffImg, turnOnAction, turnOffAction }) => {
  const [selected, setSelected] = useState('turned-off');

  const {theme} = useContext(ThemeContext)

  function getSliderClasses() {
    let sliderClasses = [styles.slider];
    sliderClasses.push(
      (selected === 'turned-on') 
        ? styles.turnOn 
        : styles.turnOff
    )
    return sliderClasses
  }

  function clickHandler() {
    const newSliderPosition = (selected === 'turned-on') ? 'turned-off' : 'turned-on';
    setSelected(newSliderPosition);
    if (selected === 'turned-on') { 
      console.log("on")
      turnOnAction()
    } else { 
      console.log("off")
      console.log(turnOffAction)
      turnOffAction() 
    }
  }

  return (
      <div className={styles.Switch} css={inlineStyles(theme).switch}>
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
            css={inlineStyles(theme).slider} 
            onClick={clickHandler}>
          </span>
      </div>
  );
}

const inlineStyles = (theme) => {
  return {
    switch: {
      backgroundColor: addOpacity(theme.light, 50)
    },
    slider: {
      backgroundColor: addOpacity(theme.headerForeColor, 100)
    }
  }
}

export default Switch;