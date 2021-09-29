// a, b, d, ....
// Stack as vertical data structure
// On top of the stack, adding and removing

// iteratively
// error function
const depthFirstSearchPrint = (graph, source) => {
  // js array with initial starting source node
  const stack = [source];

  while (stack.length > 0) {
    // remove the last element
    const current = stack.pop();
    // print it out after pop
    // console.log(current);
    // considering neighbors of current node
    // iterating through an array
    for (let neighbor of graph[current]) {
      // push on the top of the stack
      // sometimes one neighbor, two neibors or no neighbors
      stack.push(neighbor);
    }
  }
};

// recursive
const depthFirstSearchPrint = (graph, source) => {
  // source = current location
  // console.log(source);
  for (let neighbor of graph[source]) {
    // recursive call for every neighbor in an array
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
