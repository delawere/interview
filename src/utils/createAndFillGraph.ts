import WeightedDigraph from "../common/weighted-digraph";

export const createAndFillGraph = (n: number, relations: number[][]) => {
  const graph = new WeightedDigraph(n);

  for (let relation of relations) {
    const [v, w, weight] = relation;
    graph.connect(v, w, weight);
  }

  return graph;
};
