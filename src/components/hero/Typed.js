import React, {useState, useEffect} from 'react'
import {keyframes, styled, Typography, useTheme} from "@mui/material";

// It transforms ease to set speed, into a time interval.
function speedToRealTimeStep(speed, lowBoundTimeStep, highBoundTimeStep) {
  const SPEED_STEP = (highBoundTimeStep - lowBoundTimeStep) / 100;
  return highBoundTimeStep - SPEED_STEP * speed;
}

function Typed(props) {

  const {
    // List of phrases to be typed
    type = ["Typing..."],
    // Relative speed to type (0 - 100) on write operation
    writeSpeed = 95,
    // Relative speed to type (0 - 100) on delete operation
    deleteSpeed = 90,
    // Low bound on the time step between typings (Equivalent to speed 0)
    lowBoundTimeStep = 5,
    // High bound on the time step between typings (Equivalent to speed 100)
    highBoundTimeStep = 500,
    // Time to pause after writing a phrase
    pauseAfterWrite = 1500,
    // Which component to type into
    RenderComponent = Typography,
    // Cursor color
    cursorColor = "#282828"
  } = props;

  const blink = keyframes`
    50% {
      border-color: transparent;
    }
  `;

  const Cursor = styled('span')(() => ({
    borderLeft: `.1em solid ${cursorColor}BB`,
    animation: `${blink} .7s steps(1) infinite`,
    fontSize: '0.7em'
  }));

  const [internalText, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(writeSpeed)
  const [loop, setLoop] = useState(0)

  // Finds the first position where two strings start to differ
  // We use this to avoid deleting a string that we will have to re-type next.
  function findFirstDiffPos(a, b) {
    let i = 0;
    if (a === b) return a.length - 1;
    while (a[i] === b[i]) i++;
    return i;
  }

  const fullText = type[loop]
  const nextFulltext = type[(loop + 1) % type.length]

  const intersectWithNextText = findFirstDiffPos(fullText, nextFulltext)
  const textToStop = fullText.substring(0, intersectWithNextText);

  const handleTyping = () => {
    setText(
        isDeleting
            ? fullText.substring(0, internalText.length - 1)
            : fullText.substring(0, internalText.length + 1)
    )

    setSpeed(isDeleting ? deleteSpeed : writeSpeed)

    if (!isDeleting && internalText === fullText) {
      setTimeout(() => setIsDeleting(true), pauseAfterWrite)
    } else if (isDeleting && internalText === textToStop) {
      setIsDeleting(false)
      setLoop((loop + 1) % type.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, speedToRealTimeStep(speed, lowBoundTimeStep, highBoundTimeStep))
    return () => clearTimeout(timer)
  })

  return (
      <RenderComponent>
        {internalText}
        <Cursor />
      </RenderComponent>
  )
}

export default Typed;