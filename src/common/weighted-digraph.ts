import { cloneDeep } from "lodash";

class WeightedDigraph {
  data: Map<number, [number, number]>[] = [];

  constructor(n: number) {
    this.data = Array(n)
      .fill(null)
      .map(() => new Map());
  }

  connect(v: number, w: number, weight: number) {
    this.data[v].set(w, [w, weight]);
  }

  adj(v: unknown) {
    if (this.data[Number(v)]) {
      return [...this.data[Number(v)].values()];
    }
  }

  removeConnection(v: number, w: number) {
    this.data[v].delete(w);
  }

  isConnected(v: number, w: number) {
    return this.data[v].has(w);
  }

  copy() {
    const copy = new WeightedDigraph(this.data.length);
    copy.data = cloneDeep(this.data);

    return copy;
  }

  get size() {
    return this.data.length;
  }
}

export default WeightedDigraph;
