const LinkedList = require("../lib/LinkedList");
const expect     = require("chai").expect;

describe("LinkedList", () => {
  let list = null;

  beforeEach(() => {
    // create a brand new list before each test!
    list = new LinkedList();
  });

  describe("empty list", () => {
    it("should be empty string", () => {
      expect(list.toString()).to.equal("");
    });

    it("should have size 0", () => {
      expect(list.size()).to.equal(0);
    });
  });

  describe("insert()", () => {
    it("should add in five items", () => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);
      expect(list.toString()).to.equal("1 -> 2 -> 3 -> 4 -> 5");
      expect(list.size()).to.equal(5);
    });
  });

  describe("delete", () => {
    beforeEach(() => {
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);
    });

    it("should remove head of list", () => {
      list.delete(1);
      expect(list.toString()).to.equal("2 -> 3 -> 4 -> 5");
    });

    it("should remove tail of list", () => {
      list.delete(5);
      expect(list.toString()).to.equal("1 -> 2 -> 3 -> 4");
    });

    it("should remove item from middle of list", () => {
      list.delete(3);
      expect(list.toString()).to.equal("1 -> 2 -> 4 -> 5");
    });
  });
});
