// src: f
// dst: k

// n = # nodes
// e = # edges
// Time: O(e)
// Space: O(n)

// Depth first traversal

// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) {
//       console.log("true");
//     }
//   }
//   console.log("false");
// };

// breadth first traversal
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) console.log("true");
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  console.log("false");
};

const graph = {
  // adjacency list
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

hasPath(graph, "a", "d");
