const BinaryHeap = require("../lib/BinaryHeap");
const expect = require("chai").expect;

describe("BinaryHeap", () => {
  let heap = null;

  describe("insertion & delete", () => {
    it ("should be a heap", () => {
      heap = new BinaryHeap();
      heap.insert(4);
      heap.insert(50);
      heap.insert(7);
      heap.insert(55);
      heap.insert(90);
      heap.insert(87);
      heap.insert(2);
      expect(heap.toString()).to.equal("2 50 4 55 90 87 7 ");
    });

    it ("should remove the min element from the heap", () => {
      heap = new BinaryHeap();
      heap.insert(2);
      heap.insert(50);
      heap.insert(23);
      heap.insert(88);
      heap.insert(90);
      heap.insert(32);
      heap.insert(74);
      heap.insert(94);
      expect(heap.toString()).to.equal("2 50 23 88 90 32 74 94 ");
      heap.removeMin();
      expect(heap.toString()).to.equal("23 50 32 88 90 94 74 ");
    });
  });
});
