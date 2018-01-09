const Queue  = require("../lib/Queue");
const expect = require("chai").expect;

describe("Queue", () => {
  let queue = null;

  beforeEach(() => {
    queue = new Queue();
  });
  describe("empty queue", () => {
    it ("should return null for remove", () => {
      expect(queue.remove()).to.be.null;
    });
    it ("should return null for peek", () => {
      expect(queue.peek()).to.be.null;
    });
    it ("should return true for isEmpty()", () => {
      expect(queue.isEmpty()).to.be.true;
    });
  });

  describe("operations on queue", () => {
    beforeEach(() => {
      queue.add(1);
      queue.add(2);
      queue.add(3);
    });

    it("should add in a 3 items to the end of the queue()", () => {
      expect(queue.toString()).to.equal("1 2 3 ");
    });
    it("should remove the first item from the list", () => {
      queue.remove();
      expect(queue.toString()).to.equal("2 3 ");
    });
    it("should return 1 for peek", () => {
      expect(queue.peek()).to.equal(1);
    });
    it("should return false for isEmpty()", () => {
      expect(queue.isEmpty()).to.be.false;
    });
  });
});