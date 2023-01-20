class Graph {
  data: number[][] = [];

  constructor(n: number) {
    this.data = Array(n)
      .fill(null)
      .map(() => []);
  }

  connect(v: number, w: number) {
    this.data[v].push(w);
    this.data[w].push(v);
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

export default Graph;
