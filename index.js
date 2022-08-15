import array3D from "./src/array3D.js";
import maxWord from "./src/maxWord.js";

console.log(array3D(2, 2, 2));

const str = `How much is that doggie in the window? I do hope that doggie's for sale.`;
const maxWordCount = 3;
const secondResult = maxWord(str, maxWordCount);

console.log(secondResult);
