// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)

// Part 2: traversal and guarding against infinity loops (creating a set and a parameter visited )

const undirecredPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // add a Set to the func that does a traversal
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  // checks if src is in a set
  if (visited.has(src)) return false;

  // adds src to visited set
  visited.add(src);

  for (let neighbor of graph[src]) {
    // recursive call
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
};

// Part 1 : converting an edge list to an adjacency list

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    // single edge will be a pair
    // and destructure it
    const [a, b] = edge;
    // initialize a and b in a graph
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    // undirected path so both are each other neighbors
    // "two way street"
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

// represent two-way undirected connection between two nodes
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// console.log(undirecredPath(edges, "i", "n"));

// console.log(buildGraph(edges));
