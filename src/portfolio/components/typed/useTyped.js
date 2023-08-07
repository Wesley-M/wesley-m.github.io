import { useEffect, useState } from 'react';
import parse from 'html-parser-lite';

export const useTyped = (options) => {
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
  } = options;

  /**
   * Text to be typed at the moment
   * */
  const [text, setText] = useState('');

  /**
   * Whether we are deleting the text or not
   * */
  const [isDeleting, setDeleting] = useState(false);

  /**
   * Relative speed (0-100)
   * */
  const [speed, setSpeed] = useState(writeSpeed);

  /**
   * Loop control (cycle through the text list)
   * */
  const [loop, setLoop] = useState(0);

  /**
   * Global pause (stop typing)
   * */
  const [pause, setPause] = useState(false);

  /**
   * Finds the first position where two strings start to differ
   * We use this to avoid deleting a string that we will have to re-type next.
   * */
  const findFirstDiffPos = (a, b) => {
    let i = 0;
    if (a === b) return a.length - 1;
    while (a[i] === b[i]) i++;
    return i;
  };

  /**
   * It converts from an ease to understand speed (0-100) to a real
   * time step in milliseconds.
   * */
  const mapSpeedToRealTimeStep = (speed, lowBoundTimeStep, highBoundTimeStep) => {
    const SPEED_STEP = (highBoundTimeStep - lowBoundTimeStep) / 100;
    return highBoundTimeStep - SPEED_STEP * speed;
  };

  const getFullText = (index) => parseStr(type[index]).text;

  const getHighlights = (index) => parseStr(type[index]).highlights;

  const getNextIndex = () => (loop + 1) % type.length;

  /**
   * Advance the text
   * */
  const advance = () => setLoop(getNextIndex());

  /**
   * It parses a text, by removing <highlight> tags and passing
   * their values as indexes
   * */
  const parseStr = (input) => {
    return extractText(parse(`<span>${input}</span>`));
  };

  /**
   * Extracts text content and highlighted particles.
   * */
  const extractText = (dom) => {
    const children = dom[0].childNodes;
    const highlights = [];
    let fullText = '';

    const getSpace = () => (fullText && ' ');

    for (const child of children) {
      if (child?.tagName === 'text') {
        fullText += getSpace() + child.textContent.trim();
      }
      if (child?.tagName === 'highlight') {
        const word = child.childNodes[0].textContent.trim();
        highlights.push([fullText.length + 1, fullText.length + 1 + word.length]);
        fullText += getSpace() + word;
      }
    }

    return { text: fullText, highlights };
  };

  /**
   * Get the next text state based on the fullText, the latest text index
   * being shown, and whether the text is being deleted
   * */
  const getNextText = (fullText, latestIndex, isDeleting) => {
    let nextState;
    if (isDeleting) {
      nextState = fullText.substring(0, latestIndex - 1);
    } else {
      nextState = fullText.substring(0, latestIndex + 1);
    }
    return nextState;
  };

  /**
   * Signals to stop deleting characters from a text, given that the next
   * one can reuse the previous text
   * */
  const shouldStopDeleting = (text, fullText, nextFullText, isDeleting) => {
    const intersectionWithNextText = findFirstDiffPos(fullText, nextFullText);
    const unique = fullText.substring(0, intersectionWithNextText);
    return (isDeleting && text === unique) || (isDeleting && text === '');
  };

  /**
   * Signals to stop adding characters to a text
   * */
  const shouldStopWriting = (text, fullText, isDeleting) => {
    return !isDeleting && text === fullText;
  };

  /**
   * Apply pause before starting to delete again
   * */
  const pauseBeforeDeletion = () => {
    setPause(true);
    setTimeout(() => {
      setDeleting(true);
      setPause(false);
    }, pauseAfterWriteMs);
  };

  const handleTyping = () => {
    const fullText = getFullText(loop);
    const nextFullText = getFullText(getNextIndex());
    const toTypeNow = getNextText(fullText, text.length, isDeleting);

    setText(toTypeNow);
    setSpeed(isDeleting ? deleteSpeed : writeSpeed);

    if (shouldStopWriting(text, fullText, isDeleting)) {
      pauseBeforeDeletion();
    }

    if (shouldStopDeleting(text, fullText, nextFullText, isDeleting)) {
      setDeleting(false);
      advance();
    }
  };

  // Timing management
  useEffect(() => {
    const timer = setInterval(
        () => !pause && handleTyping(),
        mapSpeedToRealTimeStep(speed, lowBoundTimeStepMs, highBoundTimeStepMs),
    );
    return () => clearInterval(timer);
  } );

  return { text, highlights: getHighlights(loop) };
};
