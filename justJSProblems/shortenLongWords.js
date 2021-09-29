// write a function that accepts a sentence string as an argument
// the function should return the same sentence where words
// longer than 4 characters have their vowels removed
let removeVowels = function (str) {
  let newStr = "";
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
};

let shortenLongWords = function (str) {
  let words = str.split(" ");
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      // remove its vowels
      let noVowels = removeVowels(word);
      newWords.push(noVowels);
    } else {
      // leave it the same
      newWords.push(word);
    }
  }
  return newWords.join(" "); // join on a space
};

console.log(shortenLongWords("they are very noble people"));
