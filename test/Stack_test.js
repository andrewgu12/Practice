const Stack = require("../lib/Stack.js");
const expect = require("chai").expect;

describe("Stack", () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("empty list", () => {
    it("should be null on pop()", () => {
      expect(stack.pop()).to.be.null;
    });
    it("should be empty", () => {
      expect(stack.isEmpty()).to.be.true;
    });
    it("should have an empty string", () => {
      expect(stack.toString()).to.equal("");
    });
    it("should return null on peek()", () => {
      expect(stack.peek()).to.be.null;
    });
  });

  describe("push and pop operations", () => {
    beforeEach(() => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
    });
    it("should have four items on the stack after push", () => {
      expect(stack.toString()).to.equal("4 3 2 1 ");
    });

    it("should have 3 items after 4 push and a pop", () => {
      stack.pop();
      expect(stack.toString()).to.equal("3 2 1 ");
    });

    it("should return top of the list with peek()", () => {
      expect(stack.peek()).to.equal(4);
    });

    it("should return false for isEmpty()", () => {
      expect(stack.isEmpty()).to.be.false;
    });

    it("should have a height of four", () => {
      expect(stack.height()).to.equal(4);
    });
  });
});

