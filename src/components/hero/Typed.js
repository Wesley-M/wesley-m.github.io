import React, { useState, useEffect } from 'react'

import styles from './Typed.module.css'

const SPEEDS = {
    WRITE: 240,
    DELETE: 80 
}

function Typed({ dataText }) {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [speed, setSpeed] = useState(SPEEDS.WRITE)
    const [loop, setLoop] = useState(0)
  
    const i = loop % dataText.length
    const fullText = dataText[i]
  
    const handleTyping = () => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )
  
      setSpeed(isDeleting ? SPEEDS.DELETE : SPEEDS.WRITE)
  
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoop(loop + 1)
      } 
    }
  
    useEffect(() => {
      const timer = setTimeout(() => {
        handleTyping()
      }, speed)
      return () => clearTimeout(timer)
    })

    return (
        <p className={styles.typedText}>{text}<span className={styles.cursor}/></p>
    )
}

export default Typed