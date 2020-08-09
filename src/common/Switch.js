import React, { useState } from 'react';

import styles from './Switch.module.css'

/**
 * Component for switching between defined actions
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */

const Switch = ({ turnOnImg, turnOffImg, turnOnAction, turnOffAction }) => {
  const [selected, setSelected] = useState('turned-off');

  /**
   * return full name of the user
   * @return  {string}            Fullname of the user
   */
  function getSliderClasses() {
    let sliderClasses = [styles.slider];
    sliderClasses.push(
      (selected === 'turned-on') ? 
      styles.turnOn : 
      styles.turnOff
    )
    return sliderClasses
  }

  /**
   * return full name of the user
   * @param   {string} firstName  First Name of the User
   * @param   {string} lastName   Last Name of the User
   * @return  {string}            Fullname of the user
   */
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
      <div className={styles.Switch}>
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
          <span className={getSliderClasses().join(' ')} onClick={clickHandler}>
          </span>
      </div>
  );
}

export default Switch;