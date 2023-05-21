export const checkIfPalindrome = (text: string): number => {
  let result: number = 0;

  const word = text.toLowerCase().split("");
  const wordLength = word.length;

  let letterArray: string[] = [];

  word.forEach((letter) => {
    if (letterArray.includes(letter)) {
      letterArray.splice(letterArray.indexOf(letter), 1);
    } else {
      letterArray.push(letter);
    }
  });

  const lengthToCompare = wordLength % 2 === 0 ? 1 : 2;

  result = letterArray.length < lengthToCompare ? 1 : 0;

  return result;
};
