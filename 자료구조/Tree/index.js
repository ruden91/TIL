const Queue = require('../Queue');
const Stack = require('../Stack');
class Tree {
  constructor(data) {
    
    this._root = this.getNode(data);
  }
  
  getNode(data) {
    return {
      data,
      children: [],
    }
  }
  addNode(data, toData) {
    if (!data) {
      console.log('정확한 데이터를 입력해주세요.');
      return;
    }
    const child = this.getNode(data);
    const t = this.bfs(toData);

    t.children.push(child);
  }
  printTree() {
    console.log(JSON.stringify(this._root))
  }

  bfs(dest) {
    const q = new Queue();
    let t;
    q.enqueue(this._root);

    while(!q.isEmpty()) {
      const node = q.dequeue();
      const children = node.children;
      const value = node.data;
      
      if (value === dest) {
        t = node;
        break;
      } else {
        children.map(c => {
          q.enqueue(c)
        })
      }
    }

    return t;
  }

  dfs() {
    const s = new Stack();
  }
}


const t = new Tree('Documents');

t.addNode('Folder1', 'Documents');
t.addNode('Folder2', 'Documents');
t.addNode('Folder3', 'Documents');

t.addNode('Subfolder1A', 'Folder1');
t.addNode('Subfolder2A', 'Folder1');
t.addNode('Subfolder3A', 'Folder1');

t.addNode('Subfolder1B', 'Folder2');
t.addNode('Subfolder2B', 'Folder2');
t.addNode('Subfolder3B', 'Folder2');
t.addNode('Subfolder4B', 'Folder2');

t.addNode('Subfolder1C', 'Folder3');
t.addNode('Subfolder2C', 'Folder3');
t.addNode('Subfolder3C', 'Folder3');
t.addNode('Subfolder4C', 'Folder3');

t.addNode('Subfolder1A-1', 'Subfolder1A')
t.printTree();