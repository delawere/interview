import WeightedDigraph from "../common/weighted-digraph";

const dijkstra = (source: number, graph: WeightedDigraph) => {
  const weights: number[] = Array(graph.size).fill(Infinity);
  const paths: number[][] = Array(graph.size)
    .fill(null)
    .map((_, index) => [index]);
  weights[source] = 0;

  const queue = [source];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue;

    const currentWeight = weights[current];
    visited.add(current);
    const adjList = graph.adj(current);

    if (adjList && adjList) {
      for (let adj of adjList) {
        const [w, weight] = adj;

        if (!visited.has(w)) {
          if (weights[w] > currentWeight + weight) {
            weights[w] = currentWeight + weight;
            paths[w] = [...paths[current], w];
          }
          queue.push(w);
        }
      }
    }
  }

  return {
    weights,
    paths,
  };
};

const dijkstraForSingleNode = (
  source: number,
  target: number,
  graph: WeightedDigraph
) => {
  const weights: number[] = Array(graph.size).fill(Infinity);
  const paths: number[][] = Array(graph.size)
    .fill(null)
    .map((_, index) => [index]);
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
            paths[w] = [...paths[current], w];
          }

          if (w === target) {
            return {
              weight: weights[w],
              path: paths[w],
            };
          }
          queue.push(w);
        }
      }
    }
  }

  return -1;
};

export { dijkstra, dijkstraForSingleNode };
