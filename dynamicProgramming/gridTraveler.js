// gridTraveler(2,3) ---> 3 unique ways
// gridTraveler(1,1) ---> 1 unique way
// gridTraveler(0,1) ---> 0 unique way
// gridTraveler(1,0) ---> 0 unique way
// gridTraveler(0,0) ---> 0 unique way

// gridTraveler(3,3) --->
const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};
// Time O(2^n+m)
// Space O(n+m)
