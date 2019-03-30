const Queue = require('../Queue');
const Stack = require('../Stack');
class Graph {
  constructor(size) {
    // size, adjacent list 초기설정 
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

  // 너비 우선 탐색
  bfs(startingNode) {
    const q = new Queue();
    let explored = new Set();
    
    q.enqueue(startingNode);
    explored.add(startingNode);

    while(!q.isEmpty()) {
      const t = q.dequeue();
      this.adjList.get(t).filter(n => !explored.has(n)).forEach(n => {
        explored.add(n);
        q.enqueue(n);
      })
    }

    console.log(explored)
  }

  // 깊이 우선 탐색
  dfs(startingNode) {
    const s = new Stack();
    const explored = new Set();

    s.push(startingNode)
    explored.add(startingNode)

    while(!s.isEmpty()) {
      const value = s.pop();
      
      this.adjList.get(value).filter(n => !explored.has(n)).forEach(n => {
        explored.add(n);
        s.push(n);
      })
    }
    console.log(explored)
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
g.dfs('A')
