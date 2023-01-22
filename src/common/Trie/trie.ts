class TrieNode {
  char: string;
  index: number | null;
  children: TrieNode[];

  constructor(char: string = "", index: number | null = null) {
    this.char = char;
    this.index = index;
    this.children = [];
  }

  addChild(char: string, index: number | null = null) {
    const newChild = new TrieNode(char, index);
    this.children.push(newChild);
    return newChild;
  }

  hasChild(char: string) {
    return this.children.some((t) => t.char === char);
  }

  getChild(char: string) {
    if (this.hasChild(char)) {
      return this.children.find((t) => t.char === char) || null;
    }
    return null;
  }

  deleteChild(char: string) {
    if (this.hasChild(char)) {
      this.children = this.children.filter((t) => t.char !== char);
    }
  }

  isEnd() {
    return this.index !== null;
  }

  isEmpty() {
    return this.children.length === 0;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, index: number | null = null) {
    const destination = this.#insert(this.root, word, 0);

    if (destination !== null) {
      destination.index = index;
    }
    return destination;
  }

  #insert(root: TrieNode | null, word: string, index: number): TrieNode | null {
    if (!root || index === word.length) return root;

    let next: TrieNode | null = null;

    if (root.hasChild(word[index])) {
      next = root.getChild(word[index]);
    } else {
      next = root.addChild(word[index], null);
    }

    return this.#insert(next, word, index + 1);
  }

  search(word: string) {
    const searchResult = this.#search(this.root, word, 0);

    if (searchResult !== null) {
      return searchResult.index;
    }
    return -1;
  }

  #search(root: TrieNode | null, word: string, index: number): TrieNode | null {
    if (!root) return null;
    if (!root.hasChild(word[index])) {
      if (index === word.length) {
        return root;
      } else {
        return null;
      }
    }
    return this.#search(root.getChild(word[index]), word, index + 1);
  }

  #getPath(
    root: TrieNode | null,
    word: string,
    index: number,
    path: TrieNode[] = []
  ): TrieNode[] {
    if (!root) {
      return path;
    }

    path.push(root);

    if (index === word.length || !root.hasChild(word[index])) {
      return path;
    }

    return this.#getPath(root.getChild(word[index]), word, index + 1, path);
  }

  delete(word: string) {
    const path = this.#getPath(this.root, word, 0);

    path[path.length - 1].index = null;

    for (let i = path.length - 1; i > 0; i--) {
      const current = path[i];
      if (current.isEmpty() && !current.isEnd()) {
        path[i - 1].deleteChild(current.char);
      }
    }
  }
}

export { Trie };
