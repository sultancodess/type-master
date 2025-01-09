// Utility functions for typing test calculations
export const calculateWPM = (text: string, timeInMinutes: number): number => {
  const wordsTyped = text.split(" ").length;
  return Math.round(wordsTyped / timeInMinutes);
};

export const calculateAccuracy = (original: string, typed: string): number => {
  let correctChars = 0;
  const minLength = Math.min(typed.length, original.length);
  
  for (let i = 0; i < minLength; i++) {
    if (typed[i] === original[i]) correctChars++;
  }
  
  return Math.round((correctChars / typed.length) * 100);
};