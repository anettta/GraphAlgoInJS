// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)
// iterative func to iterate it through components
const largestComponent = (graph) => {
  // Set has O(1) lookup and  O(1) addition
  const visited = new Set();
  let largest = 0;
  // we already have an adjacency list
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }
  return largest;
};
// traversal function
const explore = (graph, node, visited) => {
  // checks
  // JS automatically converts keys into strings
  if (visited.has(String(node))) return 0;
  // adds
  visited.add(String(node));
  let size = 1;
  for (let neighbor of graph[node]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};
