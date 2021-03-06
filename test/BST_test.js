const BST = require("../lib/BST");
const expect = require("chai").expect;

describe("BST", () => {
  let tree = null;
  beforeEach(() => {
    tree = new BST();
    tree.insert(5);
    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);
    tree.insert(10);
  });

  describe("traversal", () => {
    it ("should do inorder traversal", () => {
      expect(tree.inorder()).to.equal("1 2 3 4 5 10 ");
    });

    it ("should do preorder traversal", () => {
      expect(tree.preorder()).to.equal("5 4 3 2 1 10 ");
    });

    it ("should do a postorder traversal", () => {
      expect(tree.postorder()).to.equal("1 2 3 4 10 5 ");
    });
  });
});
