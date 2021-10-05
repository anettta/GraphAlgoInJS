const canConstruct = (target, wordBank) => {
  if (target === "") {
    return true;
  }
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};
// m = target.length
// n = wordBank.length

// Time: O(n^m*m)
// Space: O(m^2)

// optimized below:

const canConstruct = (target, wordBank, memo = {}) => {
  if (target === "") {
    return true;
  }
  if (target in memo) return memo[target];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// m = target.length
// n = wordBank.length

// Time: O(n*m^2)
// Space: O(m^2)

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
