export default function maxWord(str, maxWordCount) {
  const arrayOfWords = str.split(" ");
  const newString = [];
  const numOfWords = maxWordCount - 1;
  for (let i = 0; i < numOfWords; i++) {
    newString.push(arrayOfWords[i]);
  }
  return newString.join(" ");
}
