import WeightedDigraph from "../common/weighted-digraph";
import { dijkstra, dijkstraForSingleNode } from "./dijkstra";

const findAllPossiblePaths = (source: number, graph: WeightedDigraph) => {
  // Yen's algorithm
  const allShortestPaths = dijkstra(source, graph);
  const allPossiblePaths: any[] = Array(allShortestPaths.paths.length)
    .fill(null)
    .map(() => []);

  for (let i = 0; i < allShortestPaths.paths.length; i++) {
    const node = i;

    if (node === source) {
      continue;
    }

    const shortestPath = allShortestPaths.paths[i];

    for (let j = 1; j < shortestPath.length; j++) {
      const nodeInPath = shortestPath[j];
      const prevNodeInPath = shortestPath[j - 1];
      const copy = graph.copy();

      copy.removeConnection(prevNodeInPath, nodeInPath);

      const newShortestPath = dijkstraForSingleNode(source, node, copy);

      if (newShortestPath !== -1) {
        allPossiblePaths[node].push(newShortestPath);
      }
    }
  }

  return allPossiblePaths;
};

export const secondShortestPath = (source: number, graph: WeightedDigraph) => {
  const allPossiblePaths = findAllPossiblePaths(source, graph);
  let result = [{ weight: 0, path: source }];

  for (let i = 1; i < allPossiblePaths.length; i++) {
    const currentNode = allPossiblePaths[i];
    let minPathSum = Infinity;
    let minPath = null;

    for (let j = 0; j < currentNode.length; j++) {
      if (currentNode[j].weight < minPathSum) {
        minPathSum = currentNode[j].weight;
        minPath = currentNode[j].path;
      }
    }

    result[i] = {
      weight: minPathSum,
      path: minPath,
    };
  }

  return result;
};
