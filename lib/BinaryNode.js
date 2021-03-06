class BinaryNode {
  constructor(data) {
    this.left  = null;
    this.right = null;
    this.data  = data;
  }

  toString() {
    return `${this.data}`;
  }
}

module.exports = BinaryNode;