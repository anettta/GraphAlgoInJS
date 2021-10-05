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
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
// assign connections
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstPrint = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    // add current's children to the top of the stack
    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }
};

console.log(depthFirstPrint(a));
// Time: O(n)
// Space: O(n)

// recursive
const depthFirstRecursive = (root) => {
  if (root === null) return;
  depthFirstRecursive(root.left);
  depthFirstRecursive(root.right);
};
// Time: O(n)
// Space: O(n)

// PRE-ORDER traversal
// (parent before children: SELF, left, right)
const depthFirstRecursive = (root) => {
  if (root === null) return;
  depthFirstRecursive(root.left);
  depthFirstRecursive(root.right);
};

// POST-ORDER (left, right, SELF)
const depthFirstRecursive = (root) => {
  if (root === null) return;
  depthFirstRecursive(root.left);
  depthFirstRecursive(root.right);
  console.log(root.val);
};

// IN-ORDER(left, SELF, right)
const depthFirstRecursive = (root) => {
  if (root === null) return;
  depthFirstRecursive(root.left);
  console.log(root.val);
  depthFirstRecursive(root.right);
};

// exercise
// iteratively
const sumTree = (root) => {
  const stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.val;
    // add current's children to the top of the stack
    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  return sum;
};
// recursively
const sumTree = (root) => {
  if (root === null) return 0;
  return sumTree(root.left) + root.val + sumTree(root.right);
};
