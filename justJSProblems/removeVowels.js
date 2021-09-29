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

removeVowels("happy");
