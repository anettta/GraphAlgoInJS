// pretty slow with large n
// Time O(2^n)
// Space O(n) height of the tree
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
// fib(7) --> 13
// memoization - reminder for myself
// hashmap or javascript object
// js object, keys will be arg to fn, value will be the return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
// Time O(n)
// Space O(n) height of the tree
