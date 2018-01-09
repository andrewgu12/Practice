const HeapNode = require("./HeapNode");

class BinaryHeap {
  constructor() {
    this.heap = [];
    this.position = 0;
  }

  // Takes O(log n) time
  insert(item) {
    if (this.position === 0) {
      this.heap[this.position+1] = item;
     this. position = 2;
    } else {
      this.heap[this.position++] = item;
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let pos = this.position - 1;
    while (pos > 0 && this.heap[Math.floor(pos / 2)] > this.heap[pos]) {
      let temp = this.heap[pos];
      this.heap[pos] = this.heap[Math.floor(pos / 2)];
      this.heap[Math.floor(pos / 2)] = temp;
      pos = Math.floor(pos / 2);
    }
  }

  // Takes O(log n) time
  removeMin() {
    this.heap[1] = this.heap[this.position - 1];
    this.heap.splice(this.position - 1, 1); // remove last element from array
    this.position--;
    this.bubbleDown(1);
  }
  // bubble down the element
  bubbleDown(index) {
    let smallest = index;

    // check the left child 
    if (2*index < this.position && this.heap[smallest] > this.heap[2*index]) {
      smallest = 2 * index;
    }

    // check the right side as well
    if (2*index + 1 < this.position && this.heap[smallest] > this.heap[2*index + 1]) {
      smallest = 2 * index + 1;
    }
    // smallest changed
    if ( smallest != index ) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;
      this.bubbleDown(smallest);
    }
  }

  toString() {
    let result = "";
    for(let i = 1; i < this.heap.length; i++ ) {
      result += `${this.heap[i]} `;
    }
    return result;
  }

}

module.exports = BinaryHeap;
