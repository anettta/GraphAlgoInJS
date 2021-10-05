// Binary Tree has at most TWO children
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

a.left = b;
a.right = c;

// Breadth First Traversal
// Queue: add to the back remove from the front
const breadthFirst = (root) => {
  let queue = [root];
  while (root !== null) {
    let current = queue.shift();
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
};

// exercise
const breadthFirst = (root, target) => {
  let queue = [root];
  while (root !== null) {
    let current = queue.shift();

    if (current.val === target) {
      return true;
    }
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return false;
};

// another exercise
const breadthFirst = (root) => {
  let queue = [root];
  const sum = 0;
  while (root !== null) {
    let current = queue.shift();
    sum += current.val;
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return sum;
};

// Time: O(n)
// Space: O(n)
