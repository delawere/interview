import WeightedDigraph from "../common/weighted-digraph";

const dijkstra = (source: number, graph: WeightedDigraph) => {
  const weights: number[] = Array(graph.size).fill(Infinity);
  weights[source] = 0;

  const queue = [source];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue;

    const currentWeight = weights[current];
    visited.add(current);
    const adjList = graph.adj(current);

    if (adjList && adjList.length) {
      for (let adj of adjList) {
        const [w, weight] = adj;

        if (!visited.has(w)) {
          if (weights[w] > currentWeight + weight) {
            weights[w] = currentWeight + weight;
          }
          queue.push(w);
        }
      }
    }
  }

  return weights;
};

export { dijkstra };
