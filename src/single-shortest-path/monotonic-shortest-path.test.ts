import WeightedDigraph from "../common/weighted-digraph";
import { monotonicShortestPath } from "./monotonic-shortest-path";

const testCases = [
  {
    graphSize: 7,
    relations: [
      [0, 1, 10],
      [1, 2, 20],
      [0, 3, 1],
      [3, 4, 2],
      [4, 2, 1],
      [0, 5, 15],
      [5, 6, 5],
      [4, 5, 1],
    ],
    expectResult: [0, 10, 30, 1, 3, 15, 20],
  },
  {
    graphSize: 5,
    relations: [
      [0, 1, 1],
      [1, 2, 2],
      [2, 3, 3],
      [3, 4, 1],
    ],
    expectResult: [0, 1, 3, 6, -1],
  },
  {
    graphSize: 7,
    relations: [
      [0, 2, 1.1],
      [0, 4, 2],
      [0, 5, 3.3],
      [1, 4, 2.7],
      [2, 3, 2],
      [2, 4, 1.1],
      [3, 1, 2.3],
      [4, 5, 2.4],
      [5, 1, 3],
    ],
    expectResult: [0, 5.4, 1.1, 3.1, 2, 3.3, -1],
  },
  {
    graphSize: 5,
    relations: [
      [0, 1, 2.3],
      [0, 2, 3.1],
      [1, 2, 3.7],
      [2, 3, 1.9],
      [3, 4, 2.1],
    ],
    expectResult: [0, 2.3, 3.1, 5, -1],
  },
  {
    graphSize: 1,
    relations: [],
    expectResult: [0],
  },
  {
    graphSize: 3,
    relations: [
      [0, 1, 1],
      [1, 2, 2],
    ],
    expectResult: [0, 1, 3],
  },
  {
    graphSize: 3,
    relations: [
      [0, 1, 2],
      [1, 2, 1],
    ],
    expectResult: [0, 2, 3],
  },
];

const createAndFillGraph = (n: number, relations: number[][]) => {
  const graph = new WeightedDigraph(n);

  for (let relation of relations) {
    const [v, w, weight] = relation;
    graph.connect(v, w, weight);
  }

  return graph;
};

describe("monotonicShortestPath", () => {
  test("should return correct result for test case 1", () => {
    const { graphSize, relations, expectResult } = testCases[0];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 2", () => {
    const { graphSize, relations, expectResult } = testCases[1];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 3", () => {
    const { graphSize, relations, expectResult } = testCases[2];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 4", () => {
    const { graphSize, relations, expectResult } = testCases[3];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 5", () => {
    const { graphSize, relations, expectResult } = testCases[4];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 6", () => {
    const { graphSize, relations, expectResult } = testCases[5];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });

  test("should return correct result for test case 7", () => {
    const { graphSize, relations, expectResult } = testCases[6];
    const graph = createAndFillGraph(graphSize, relations);

    expect(monotonicShortestPath(0, graph)).toStrictEqual(expectResult);
  });
});
