const countConstruct = (target, wordBank) => {
  if (target === "") {
    return 1;
  }
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, wordBank);
      totalCount += numWays;
      return totalCount;
    }
  }

  return totalCount;
};
// m = target.length
// n = wordBank.length

// Time: O(n^m*m)
// Space: O(m^2)

const countConstruct = (target, wordBank, memo = {}) => {
  if (target === "") {
    return 1;
  }
  if (target in memo) return memo[target];
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, wordBank, memo);
      totalCount += numWays;
      return totalCount;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};
// m = target.length
// n = wordBank.length

// Time: O(n*m^2)
// Space: O(m^2)

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
