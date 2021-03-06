const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let travel = this.head;

      while (travel.next) {
        travel = travel.next;
      }
      travel.next = new Node(data);
    }
  }

  size() {
    let travel = this.head;
    let count = 0;

    while (travel != null) {
      count++;
      travel = travel.next;
    }

    return count;
  }

  delete(data) {
    let travel = this.head;

    if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      while (travel.next && travel.next.data !== data) {
        travel = travel.next;
      }
      travel.next = travel.next.next;
    }
  }

  toString() {
    let travel = this.head;
    let result = "";
    while (travel) {
      // process.stdout.write(`${travel.data}`);
      result += `${travel.data}`;
      if (travel.next) {
        result += " -> ";
        // process.stdout.write(" -> ");
      }
      travel = travel.next;
    }
    return result;
    process.stdout.write("\n");
  }
}

module.exports = LinkedList;