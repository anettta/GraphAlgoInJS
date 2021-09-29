// graph traversal and iterative
// check how many connected nodes are there
// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)

const connectedComponentsCount = (graph) => {
  // Set has O(1) lookup and  O(1) addition
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  // checks
  // JS automatically converts keys into strings
  if (visited.has(String(current))) return false;
  // adds
  visited.add(String(current));
  // depth first, recursively
  // explores all of the neighbors
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
