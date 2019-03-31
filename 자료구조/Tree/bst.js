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

  }

  // 중위순회
  inorder() {

  }

  // 후위순회
  postorder() {

  }

  // 전위순회
  preorder() {

  }
  
  printBST() {
    console.log(JSON.stringify(this.root));
  }
  // helpers
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

bst.insert();

bst.printBST();