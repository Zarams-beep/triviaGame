// Helpers/callBackFunction.js

export function decodeEntities(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  
  export function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the array to avoid mutating the original
    
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
  }

  // GlobalLevelContext.js

import { createContext } from 'react';

const GlobalLevelContext = createContext({
    levelStore: '', // Initial value for levelStore
    setLevelStore: () => {}, // Placeholder function
});

export default GlobalLevelContext;

  