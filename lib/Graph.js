// Adjacency List implementation
const Queue = require("./Queue");

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(data) {
    if (this.nodes[data]) {
      return `Already added in node ${data}`;
    } else {
      this.nodes[data] = {"visited": false, "edges": []}; // { visited, edges}
    }
  }

  addEdge(data, edge) {
    if (!this.nodes[data] || !this.nodes[edge]) {
      return `Edge can't be added because node doesn't exist!`;
    }

    if (this.nodes[data]["edges"].includes(edge) !== false) {
      return `Already added in edge ${data} -> ${edge}`;
    } else {
      this.nodes[data]["edges"].push(edge); // the false represents visited
    }
  }

  depthFirstSearch() {
    let key = Object.keys(this.nodes)[0];
    let result = this.depthFirstSearchAux(key, this.nodes[key], "");
    return result;
  }

  depthFirstSearchAux(key, node, result) {
    if (!node)
      return result;
    // result += key + " ";
    result += key + " ";
    this.nodes[key]["visited"] = true;
    this.nodes[key]["edges"].forEach((edge) => {
      if (!this.nodes[edge]["visited"])
        result = this.depthFirstSearchAux(edge, this.nodes[edge], result);
    });

    return result;
  }

  breadthFirstSearch() {
    let q = new Queue();
    let result = "";

    let root = Object.keys(this.nodes)[0];
    this.nodes[root]["visited"] = true;
    q.add(root);

    while (!q.isEmpty()) {
      let node = q.remove();
      result += node + " ";
      this.nodes[node]["edges"].forEach((edge) => {
        if (!this.nodes[edge]["visited"]) {
          this.nodes[edge]["visited"] = true;
          q.add(edge);
        }
      });
    }
    return result;
  }

  toString() {
    let result = "";
    result += "{\n";
    for (let node in this.nodes) {
      result += node + " : { visited: " + this.nodes[node]["visited"] + ", edges: " + this.nodes[node]["edges"] + " } \n"; 
    }
    result += "\n}";
    return result;
  }
}

module.exports = Graph;
