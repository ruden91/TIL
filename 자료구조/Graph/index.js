class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);

    if (index > -1) {
      this.adjacents.splice(index, 1);

      return node;
    }
  }
  getAdjacents() {
    return this.adjacents;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
    this.queue = [];
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value);

    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }

    return this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);

      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  bfs(first) {
    const visited = new Map();

    this.queue.push(first);

    while (this.queue.length > 0) {
      const node = this.queue.shift();
      console.log(this.queue);
      if (node && !visited.get(node)) {
        visited.set(node);
        node.getAdjacents().forEach(n => this.queue.push(n));
      }
    }
  }
}

Graph.DIRECTED = Symbol("directed graph");
Graph.UNDIRECTED = Symbol("undirected graph");

const graph = new Graph();

const first = graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
graph.addVertex(10);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(3, 7);
graph.addEdge(4, 8);
graph.addEdge(5, 9);
graph.addEdge(6, 10);
// graph.removeVertex(5);

console.log(graph.bfs(first));
