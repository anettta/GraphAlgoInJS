// breadth first
// Time: O(n)
// Space: O()

const levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    let length = queue.length,
      count = 0;
    const currentLevelValues = [];
    while (count < length) {
      const currentNode = queue.shift(); // get the first node
      currentLevelValues.push(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
};
