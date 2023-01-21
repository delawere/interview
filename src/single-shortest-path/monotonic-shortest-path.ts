import WeightedDigraph from "../common/weighted-digraph";

// TODO
// - use IndexedPriorityQueue instead of array

const search = (source: number, graph: WeightedDigraph, desc = false) => {
  const weights: number[] = Array(graph.size).fill(Infinity);
  const edgeToWeight: number[] = Array(graph.size).fill(Infinity);

  weights[source] = 0;
  edgeToWeight[source] = 0;

  const queue = [source];
  const visited: Set<number> = new Set();

  const relax = (
    adj: number[],
    current: number,
    currentWeight: number,
    isSource: boolean = false
  ) => {
    const [w, weight] = adj;
    const newPath = currentWeight + weight;

    if (!visited.has(w)) {
      if (desc) {
        // We skip order-check for source -> any connection
        if (
          (edgeToWeight[current] > weight || isSource) &&
          weights[w] > newPath
        ) {
          weights[w] = newPath;
          edgeToWeight[w] = weight;
        }
      } else {
        if (edgeToWeight[current] < weight && weights[w] > newPath) {
          weights[w] = newPath;
          edgeToWeight[w] = weight;
        }
      }

      queue.push(w);
    }
  };

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue;

    const currentWeight = weights[current];
    visited.add(current);
    const adjList = graph.adj(current);

    if (adjList && adjList.length) {
      for (let adj of adjList) {
        relax(adj, current, currentWeight, current === source);
      }
    }
  }
  return weights;
};

const monotonicShortestPath = (source: number, graph: WeightedDigraph) => {
  const ascResult = search(source, graph);
  const descResult = search(source, graph, true);

  return Array(ascResult.length)
    .fill(-1)
    .map((t, i) => {
      const min = Math.min(ascResult[i], descResult[i]);

      return min !== Infinity ? min : t;
    });
};

export { monotonicShortestPath };
