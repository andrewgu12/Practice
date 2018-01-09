const Node = require("./Node");

class Queue {
  constructor() {
    this.head = null;
  }

  add(item) {
    let node = new Node(item);
    let travel = this.head;

    if (!this.head) {
      this.head = node; 
    } else {
      while(travel.next) {
        travel = travel.next;
      }
      travel.next = node;
    }
  }

  remove() {
    let travel = this.head;
    let result = null;

    if (this.head) {
      if (!this.head.next) { // only 1 item list, so just remove the head
        result = this.head.data;
        this.head = null;
      } else {        
        result = this.head.data;
        this.head = this.head.next;
      }
    }
    
    return result;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }
  }

  isEmpty() {
    return (this.head) ? false : true;
  }

  toString() {
    let result = "";
    let travel = this.head;

    while (travel) {
      result += `${travel.data} `;
      travel = travel.next;      
    }
    return result;
  }
}

module.exports = Queue;