// canSum(7, [5,3,4,7]) ---> true
// canSum(7, [2.4]) ---> false

// Time: O(n^m)
// Space: O(m)
// m = target sum
// n = array length
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
// Time: O(m * n)
// Space: O(m)
