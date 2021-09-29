// breadth first traversal is more useful for shortest path
// Queue ----->
// (w, 0) - starting node
// (x, 1) (v, 1)
// need to track visited
// add to the back of the queue
// visited set as a cycle prevention
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]); // pass in an array
  // breadth first logic
  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};
// converting edge list into adjacency list
const buildGraph = (edges) => {
  const graph = {};

  for (let edge in edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
