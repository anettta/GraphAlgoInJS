// return a 2D array
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") {
    return [[]];
  }
  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
// m = target.length
// n = wordBank.length

// Time: O(n^m)
// Space: O(m) m height of recursion tree

// m = target.length
// n = wordBank.length

// Time: O(n^m)
// Space: O(m)

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
