/**
 * 이진 탐색 트리
 */
class BST {
  constructor() {
    this.root = null;
  }

  insert(data = null) {
    if (data === null) {
      throw Error('정확한 데이터 값을 입력해주세요.');
    }

    const node = this.getNode(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node)
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  // 중위순회
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right)
    }
  }

  // 후위순회
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // 전위순회
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right)
    }
  }
  
  printBST() {
    console.log(JSON.stringify(this.root));
  }
  // helpers
  getRootNode() {
    return this.root;
  }
  insertNode(node, newNode) {
    if (node.data < newNode.data) {
      // right
      if (node.right === null) {
        node.right = newNode;       
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      // left
      if (node.left === null) {
        node.left = newNode;        
      } else {
        this.insertNode(node.left, newNode)        
      }
    }
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if(key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      
    }
    
  }

  getNode(data) {
    return {
      data,
      left: null,
      right: null
    }
  }
}

const bst = new BST();


bst.insert(5);
bst.insert(7);
bst.insert(2);
bst.insert(14);
bst.insert(30);
bst.insert(21);
bst.insert(3);
bst.insert(2);


// bst.printBST();
const rootNode = bst.getRootNode();
bst.inorder(rootNode);
bst.preorder(rootNode);
bst.postorder(rootNode);