import React, { useRef } from 'react';

export const useWordsSpeedPerSecond = (str) => {
  let letters = useRef(str.length);
  let timer = useRef();
  if (!timer.current) {
    timer.current = setInterval(() => {
      letters.current = 0;
    }, 1000);
  }
  return letters.current++;
};

export const useWordsHistoryLength = (str) => {
  let history = useRef(str.length);
  return history.current++;
};
