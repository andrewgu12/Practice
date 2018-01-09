class HeapNode {
  constructor(item) {
    this.data = item;
  }

  toString() {
    return `${this.data}`;
  }
}

module.exports = HeapNode;
