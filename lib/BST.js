const BinaryNode = require("./BinaryNode");

class BST {
  constructor() {
    this.root = null;

  }

  // insert an item into the tree
  insert(item) {
    this.root = this.insertAux(this.root, item);
  }

  // utility function to insert an item into a BST
  // no duplicates allowed
  insertAux(node, item) {
    if (!node) 
      return new BinaryNode(item);

    if (item < node.data) {
      node.left = this.insertAux(node.left, item);
    } else if (item > node.data) {
      node.right = this.insertAux(node.right, item);
    }

    return node;
  }

  
  inorder() {
    let result = this.inorderAux(this.root);
    return result;
  }

  inorderAux(node) {
    let result = "";

    if (node) {
      result += this.inorderAux(node.left);
      result += node.toString() + " ";
      result += this.inorderAux(node.right);
    }

    return result;
  }

  preorder() {
    let result = this.preorderAux(this.root);
    return result;
  }

  preorderAux(node) {
    let result = "";
    if (node) {
      result += node.toString() + " ";
      result += this.preorderAux(node.left);
      result += this.preorderAux(node.right);
    }

    return result;
  }

  postorder() {
    let result = this.postorderAux(this.root);
    return result;
  }

  postorderAux(node) {
    let result = "";
    if (node) {
      result += this.postorderAux(node.left);
      result += this.postorderAux(node.right);
      result += node.toString() + " ";
    }
    return result;
  }
}

module.exports = BST;
