// (row, col)

//                   (r-1, c)
//                      |
//      (r, c-1) <--- (r,c) ---> (r, c+1)
//                      |
//                   (r+1, c)
// nested loops
// depth first w/ visited set
// r = # rows
// c = # columns
// Time: O(rc)
// Space: O(rc)

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  // iterate every posible position
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false; // one base case
  // first check above
  if (grid[r][c] === "W") return false;
  // we need to prevent cycles or infinite loops with
  // visited set
  // we need comma to separate position location
  // 12 and 4 or 4 and 12 can end up in collision without a comma
  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

// Set behaviour
const s = new Set();
s.add("1, 3"); // string instead of an array
