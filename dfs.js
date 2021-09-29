// a, b, d, ....

// iteratively

// const depthFirstSearchPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// };

// recursive
const depthFirstSearchPrint = (graph, source) => {
  // source = current location
  // console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstSearchPrint(graph, neighbor);
  }
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

depthFirstSearchPrint(graph, "a");
