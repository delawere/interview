import { times } from "lodash";
import { Trie } from "./trie";

describe("Trie", () => {
  test("should works fine", () => {
    const trie = new Trie();

    trie.insert("hello", 0);
    trie.insert("hell", 1);
    trie.insert("world", 2);
    trie.insert("wow", 3);
    trie.insert("low", 4);

    expect(trie.search("hello")).toEqual(0);
    expect(trie.search("hell")).toEqual(1);
    expect(trie.search("world")).toEqual(2);
    expect(trie.search("wow")).toEqual(3);
    expect(trie.search("low")).toEqual(4);

    trie.delete("hello");
    expect(trie.search("hello")).toEqual(-1);

    trie.delete("hell");
    expect(trie.search("hell")).toEqual(-1);

    trie.delete("world");
    expect(trie.search("world")).toEqual(-1);

    trie.delete("wow");
    expect(trie.search("wow")).toEqual(-1);

    trie.delete("low");
    expect(trie.search("low")).toEqual(-1);

    trie.insert("apple", 0);

    expect(trie.startsWith("app")).toBeTruthy();
  });
});
