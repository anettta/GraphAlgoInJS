// write a function 'spam' that accepts a 2D array as an argument
// the array contains pairs as arguments
// the first element of every pair is a number and the
// second element is a word
// the function should return a string containing the words
// repeated the specified number of times.
// let array = [
//   ["hi", 3],
//   ["bye", 2],
// ];
// console.log(spam(array)); // 'hi hi hi bye bye'

let spam = function (pairs) {
  let words = [];

  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i]; // ["hi", 3],
    let word = pair[0]; // "hi"
    let num = pair[1]; // 3
    for (let j = 0; j < num; j++) {
      words.push(word);
    }
  }
  return words.join(" "); // join on the space
};
