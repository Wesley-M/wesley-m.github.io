import React, {useState, useEffect} from 'react'
import {keyframes, styled, Typography, useTheme} from "@mui/material";

const SPEEDS = {
  WRITE: 240,
  DELETE: 80
}

function Typed({text, color}) {
  const TypedText = styled(Typography)(() => ({
    margin: 0,
    marginBottom: '0.8em',
    height: '1em',
    width: 'auto',
    fontSize: '1em',
    fontFamily: 'Bree Serif',
    color: `${color}`
  }));

  const blink = keyframes`
    50% {
      border-color: transparent;
    }
  `;

  const Cursor = styled('span')(() => ({
    borderLeft: `.1em solid ${color}BB`,
    animation: `${blink} .7s steps(1) infinite`,
    fontSize: '0.7em'
  }));

  const [internalText, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(SPEEDS.WRITE)
  const [loop, setLoop] = useState(0)

  const i = loop % text.length
  const fullText = text[i]

  const handleTyping = () => {
    setText(
        isDeleting
            ? fullText.substring(0, internalText.length - 1)
            : fullText.substring(0, internalText.length + 1)
    )

    setSpeed(isDeleting ? SPEEDS.DELETE : SPEEDS.WRITE)

    if (!isDeleting && internalText === fullText) {
      setTimeout(() => setIsDeleting(true), 500)
    } else if (isDeleting && internalText === '') {
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

  console.log(internalText)

  return (
      <TypedText>
        {internalText}
        <Cursor />
      </TypedText>
  )
}

export default Typed