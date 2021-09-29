// only possible iteratively
// a, b, c, ...
// Queue
// pushes to the back of the queue

const breadthFirstSearchPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    // removes the first element
    const current = queue.shift();
    // console.log(current);

    for (let neighbor of graph[current]) {
      // pushes to the back of the queue
      queue.push(neighbor);
    }
  }
};

const graph = {
  // adjacency list
  // hash map
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstSearchPrint(graph, "a");
