class Graph {
  constructor(size) {
    // size, adjacent list 초기섲렁
    this.size = size;
    this.adjList = new Map();
  }

  // 그래프에 정점을 추가하는 메서드
  addVertex(v) {
    this.adjList.set(v, []);
  }

  // 그래프에 엣지를 추가하는 메서드
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    const keys = this.adjList.keys();

    for (let key of keys) {
      const values = this.adjList.get(key);
      const connectedValues = values.join('');
      
      console.log(`${key} -> ${connectedValues}`);
    }
  }

  bfs(startingNode) {
    // create visited Array
    const visited = [];
    for (let i = 0; i < this.size; i++) {
      visited.push(false)
    }

    console.log(visited);
  }

  dfs(startingNode) {

  }
}

const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
const g = new Graph(vertices.length);

// 정점 추가
for (let vertex of vertices) {
  g.addVertex(vertex);
}

// 엣지 추가
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 

// g.printGraph();
g.bfs('A')
