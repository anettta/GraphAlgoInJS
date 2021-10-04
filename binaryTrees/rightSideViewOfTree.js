// breadth first
// 1. identify the end of level 1
// 2. add last node to result

// depth first
// 1. prioritize right side
// 2. keep track level of nodes
// NRL Preorder: [1,3,6,2,5,4,7,8]
// RNL Inorder: [6,3,1,5,2,7,8,4]
// RLN Postorder: [6,3,5,8,7,4,2,1]

// Time: O(n)
// Space: O(w) width of the tree
const rightSideViewOfTree = function (root) {
  // pass in global array as a function
  // using the same array
  const result = [];
  dfs(root, 0, result);
  return result;
};
const dfs = function (node, currentLevel, result) {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.value);
  }
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
    dfs(node.left, currentLevel + 1, result);
  }
};
