class WeightedDigraph {
  data: number[][][] = [];

  constructor(n: number) {
    this.data = Array(n)
      .fill(null)
      .map(() => []);
  }

  connect(v: number, w: number, weight: number) {
    this.data[v].push([w, weight]);
  }

  adj(v: unknown) {
    if (this.data[Number(v)]) {
      return this.data[Number(v)];
    }
  }

  get size() {
    return this.data.length;
  }
}

export default WeightedDigraph;
