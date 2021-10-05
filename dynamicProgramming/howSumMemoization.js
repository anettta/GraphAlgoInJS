// Time: O(n^m * m)
// Space: O(m)
//
// m = target sum
// n = array length
// brute force

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};
// memoized
// Time: O(n*m^2) // no longer exponential
// Space: O(m^2)
