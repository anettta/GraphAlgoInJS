function recursive(node, count) {
  if (node === null) return count;
  count++;
  return Math.max(recursive(node.left, count), recursive(node.right, count));
}
