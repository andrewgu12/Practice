const Graph = require("../lib/Graph");
const expect = require("chai").expect;

describe("Graph", () => {
  let graph = null;

  beforeEach(() => {
    graph = new Graph();
    graph.addNode(0);
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(0, 5);
    graph.addEdge(0, 4);
    graph.addEdge(0, 1);
    graph.addEdge(1, 4);
    graph.addEdge(1, 3);
    graph.addEdge(2, 1);
    graph.addEdge(3, 4);
    graph.addEdge(3, 2);
  });

  describe("search", () => {
    it ("shows depth first search", () => {
      expect(graph.depthFirstSearch()).to.equal("0 5 4 1 3 2 ");
    });

    it ("shows breadth first search", () => {
      expect(graph.breadthFirstSearch()).to.equal("0 5 4 1 3 2 ");
    });
  });
});
