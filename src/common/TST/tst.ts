class TernarySearchTreeNode {
  index: number | null;
  value: string;
  mid: TernarySearchTreeNode | null = null;
  left: TernarySearchTreeNode | null = null;
  right: TernarySearchTreeNode | null = null;

  constructor(value: string, index: number | null = null) {
    this.value = value;
    this.index = index;
  }

  isEndOfTheWord() {
    return this.index === 1;
  }

  setIsEndOfTheWord(value: boolean) {
    this.index = value ? 1 : 0;
  }
}

export class TernarySearchTree {
  root: TernarySearchTreeNode | null = null;

  toString() {
    return JSON.stringify(this.root, null, "\t");
  }

  #insert(
    str: string,
    index: number = 0,
    root: TernarySearchTreeNode | null = null
  ) {
    if (!root) {
      root = new TernarySearchTreeNode(str[index]);
    }

    if (root.value < str[index]) {
      root.right = this.#insert(str, index, root.right);
    } else if (root.value > str[index]) {
      root.left = this.#insert(str, index, root.left);
    } else {
      if (index === str.length - 1) {
        root.setIsEndOfTheWord(true);
      } else {
        root.mid = this.#insert(str, index + 1, root.mid);
      }
    }

    return root;
  }

  #search(
    str: string,
    index = 0,
    root: TernarySearchTreeNode | null = null
  ): boolean {
    if (!root) return false;

    if (str[index] < root.value) {
      return this.#search(str, index, root.left);
    } else if (str[index] > root.value) {
      return this.#search(str, index, root.right);
    } else {
      if (index === str.length - 1) {
        return root.isEndOfTheWord();
      } else {
        return this.#search(str, index + 1, root.mid);
      }
    }
  }

  #startsWith(
    str: string,
    index = 0,
    root: TernarySearchTreeNode | null = null
  ): boolean {
    if (!root) return false;

    if (str[index] < root.value) {
      return this.#startsWith(str, index, root.left);
    } else if (str[index] > root.value) {
      return this.#startsWith(str, index, root.right);
    } else {
      if (index === str.length - 1) {
        return true;
      } else {
        return this.#startsWith(str, index + 1, root.mid);
      }
    }
  }

  public search(str: string) {
    if (!str) {
      return true;
    }

    return this.#search(str, 0, this.root);
  }

  public insert(str: string) {
    if (!str) {
      throw new Error("Input string must have at least one symbol");
    }

    let startIndex = 0;

    if (!this.root) {
      this.root = new TernarySearchTreeNode(str[startIndex]);
    }

    this.#insert(str, startIndex, this.root);
  }

  public startsWith(str: string) {
    return this.#startsWith(str, 0, this.root);
  }
}
