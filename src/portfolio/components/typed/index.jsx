import { keyframes, Typography } from '@mui/material';
import React from 'react';
import { useTyped } from './useTyped';

const Cursor = ({ color }) => {
  const blink = keyframes`
    50% {
      opacity: 0;
    }
  `;

  return (
    <Typography component='span' sx={{
      borderLeft: `.2em solid ${color}`,
      animation: `${blink} 1s steps(1) infinite`,
      fontSize: '0.75em',
      marginLeft: '.2em',
    }}/>
  );
};

export function Typed (props) {
  const {
    // List of phrases to be typed
    type = ['Typing...'],
    // Relative speed to type (0 - 100) on write operation
    writeSpeed = 95,
    // Relative speed to type (0 - 100) on delete operation
    deleteSpeed = 90,
    // Low bound on the time step between typings (Equivalent to speed 0)
    lowBoundTimeStepMs = 5,
    // High bound on the time step between typings (Equivalent to speed 100)
    highBoundTimeStepMs = 500,
    // Time to pause after writing a phrase
    pauseAfterWriteMs = 1500,
    // Which component each letter will be encased in
    RenderComponent = Typography,
    // Cursor color
    cursorColor = '#282828',
  } = props;

  const { text, highlights } = useTyped({
    type,
    writeSpeed,
    deleteSpeed,
    lowBoundTimeStepMs,
    highBoundTimeStepMs,
    pauseAfterWriteMs,
  });

  const splitStringByIntervals = (inputString, intervals) => {
    let startIndex = 0;
    return intervals.reduce((result, [start, end]) => {
      result.push(inputString.substring(startIndex, start), inputString.substring(start, end));
      startIndex = end;
      return result;
    }, []).concat(inputString.substring(startIndex));
  };

  const isHighlighted = (segment) => {
    return highlights.some((h) => segment === text.substring(h[0], h[1]));
  };

  const getHighlightedStyle = () => ({
    'fontWeight': 600,
    'backgroundColor': '#B6427E',
    'backgroundImage': 'linear-gradient(270deg, #B6427E 0%, #C54D0A 100%)',
    'backgroundSize': '100%',
    'WebkitBackgroundClip': 'text',
    'MozBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent',
    'MozTextFillColor': 'transparent',
    'padding': '0 2px',
  });

  return (
    <RenderComponent>
      {splitStringByIntervals(text, highlights).map((w, idx) => (
        <span
          key={idx}
          style={{
            display: 'inline',
            ...(isHighlighted(w) ? getHighlightedStyle() : {}),
          }}
        >
          {w}
        </span>
      ))}
      <Cursor color={cursorColor}/>
    </RenderComponent>
  );
}
