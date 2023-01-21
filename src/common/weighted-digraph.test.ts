import { createAndFillGraph } from "../utils/createAndFillGraph";
import WeightedDigraph from "./weighted-digraph";

describe("WeightedDigraph", () => {
  test.only("should return the copy of graph", () => {
    const graph = createAndFillGraph(6, [
      [0, 1, 2],
      [0, 2, 3],
      [2, 3, 2],
      [2, 1, 1],
      [1, 3, 4],
      [3, 4, 2],
      [4, 5, 2],
      [3, 5, 1],
    ]);

    const copy = graph.copy();

    expect(copy.adj(0)).toStrictEqual([
      [1, 2],
      [2, 3],
    ]);
    expect(copy.adj(3)).toStrictEqual([
      [4, 2],
      [5, 1],
    ]);

    copy.removeConnection(0, 1);
    copy.removeConnection(3, 4);

    expect(copy.adj(0)).toStrictEqual([[2, 3]]);

    expect(copy.adj(3)).toStrictEqual([[5, 1]]);
  });
});
