export const getRandomParagraph = (paragraphs: any[]) => {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[randomIndex];
};