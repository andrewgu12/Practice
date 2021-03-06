const Node = require("./Node");

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  pop() {
    let nodeData = null;
    if (this.head) {
      if (this.head.next) { // multiple item list
        nodeData = this.head.data;
        this.head = this.head.next;
        this.size--;
      } else { // single item list
        nodeData = this.head.data;
        this.head = null;
        this.size--;
      }
    }

    // if it doesn't hit either, empty stack
    return nodeData;
  }

  push(item) {
    let node = new Node(item);

    // add to head of list - "top of stack"
    if (this.head) { 
      node.next = this.head;
      this.head = node;
    } else { // empty list
      this.head = node;
    }
    this.size++;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }    
  }

  height() {
    return this.size;
  }

  isEmpty() {
    return (this.size > 0) ? false : true;
  }

  toString() {
    let travel = this.head;
    let string = "";
    while (travel) {
      string += `${travel.data} `;
      // process.stdout.write(`${travel.data}`);
      // process.stdout.write("\n");
      travel = travel.next;
    } 
    return string;
  }
}

module.exports = Stack;