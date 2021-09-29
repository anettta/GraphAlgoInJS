let removeFirstVowel = function (str) {
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      return str.slice(0, i) + str.slice(i + 1);
      // str.slice(0, i) means v because i that is o is exluded
      // str.slice(i + 1) means lcano
      // as a result o is removed
    }
  }
  return str; // to avoid returning undefined in case no vowels such as in word: 'try'
};

console.log(removeFirstVowel("volcano"));
