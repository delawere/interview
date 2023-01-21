import { createAndFillGraph } from "../utils/createAndFillGraph";
import { secondShortestPath } from "./second-shortest-path";

describe("second-shortest-path", () => {
  test("should works fine", () => {
    const graph = createAndFillGraph(6, [
      [0, 1, 3],
      [0, 2, 2],
      [2, 3, 2],
      [2, 1, 1],
      [1, 3, 4],
      [2, 4, 3],
      [3, 4, 2],
      [3, 5, 1],
      [4, 5, 2],
    ]);

    expect(secondShortestPath(0, graph)).toStrictEqual([
      {
        weight: 0,
        path: 0,
      },
      {
        weight: 3,
        path: [0, 2, 1],
      },
      {
        weight: Infinity,
        path: null,
      },
      {
        weight: 7,
        path: [0, 1, 3],
      },
      {
        weight: 6,
        path: [0, 2, 3, 4],
      },
      {
        weight: 7,
        path: [0, 2, 4, 5],
      },
    ]);
  });
});
