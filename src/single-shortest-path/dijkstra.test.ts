import { createAndFillGraph } from "../utils/createAndFillGraph";
import { dijkstra, dijkstraForSingleNode } from "./dijkstra";

describe("dijkstra", () => {
  test("should return correct result for all nodes", () => {
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

    expect(dijkstra(0, graph)).toStrictEqual({
      paths: [[0], [0, 1], [0, 2], [0, 2, 3], [0, 2, 3, 4], [0, 2, 3, 5]],
      weights: [0, 2, 3, 5, 7, 6],
    });
  });

  test("should return correct result for single node", () => {
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

    expect(dijkstraForSingleNode(0, 4, graph)).toStrictEqual({
      path: [0, 2, 3, 4],
      weight: 7,
    });
  });
});
