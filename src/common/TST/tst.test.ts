import { TernarySearchTree } from "./tst";

describe("TernarySearchTree", () => {
  test("should works fine", () => {
    const tst = new TernarySearchTree();

    tst.insert("hello");
    tst.insert("hell");
    tst.insert("hollywood");

    expect(tst.search("hello")).toBeTruthy();
    expect(tst.search("hell")).toBeTruthy();
    expect(tst.search("hollywood")).toBeTruthy();

    expect(tst.startsWith("hell")).toBeTruthy();
    expect(tst.startsWith("holly")).toBeTruthy();
  });
});
