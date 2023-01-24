class TrieNode {
  char: string;
  index: number | null;
  children: Map<string, TrieNode>;

  constructor(char: string = "", index: number | null = null) {
    this.char = char;
    this.index = index;
    this.children = new Map();
  }

  addChild(char: string, index: number | null = null) {
    const newChild = new TrieNode(char, index);
    this.children.set(char, newChild);
    return newChild;
  }

  hasChild(char: string) {
    return this.children.has(char);
  }

  getChild(char: string) {
    if (this.hasChild(char)) {
      return this.children.get(char);
    }
    return null;
  }

  deleteChild(char: string) {
    if (this.hasChild(char)) {
      this.children.delete(char);
    }
  }

  isEnd() {
    return this.index !== null;
  }

  isEmpty() {
    return this.children.size === 0;
  }

  setIndex(index: number) {
    this.index = index;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, index: number) {
    let current = this.root;

    for (let char of word) {
      if (current.hasChild(char)) {
        current = current.getChild(char) as TrieNode;
      } else {
        current = current.addChild(char, null);
      }
    }

    current.setIndex(index);

    return current;
  }

  search(word: string) {
    let current = this.root;

    for (let char of word) {
      if (current.hasChild(char)) {
        current = current.getChild(char) as TrieNode;
      } else {
        return -1;
      }
    }
    return current.isEnd() ? current.index : -1;
  }

  #getPath(word: string): TrieNode[] | null {
    const path: TrieNode[] = [];
    let current = this.root;

    for (let char of word) {
      path.push(current);

      if (current.hasChild(char)) {
        current = current.getChild(char) as TrieNode;
      } else {
        return null;
      }
    }

    path.push(current);

    return current.isEnd() ? path : null;
  }

  delete(word: string) {
    const path = this.#getPath(word);

    if (path === null) {
      throw new Error("Word ${word} does not exists in the trie");
    }

    path[path.length - 1].index = null;

    for (let i = path.length - 1; i > 0; i--) {
      const current = path[i];
      if (current.isEmpty() && !current.isEnd()) {
        path[i - 1].deleteChild(current.char);
      }
    }
  }

  startsWith(word: string) {
    let current = this.root;

    for (let char of word) {
      if (current.hasChild(char)) {
        current = current.getChild(char) as TrieNode;
      } else {
        return false;
      }
    }

    return true;
  }
}

export { Trie };
