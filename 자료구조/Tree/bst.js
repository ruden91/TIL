/**
 * 이진 탐색 트리
 * 검색 O(logn)
 * 추가 O(logn)
 * 삭제 O(logn)
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

  removeNode(node, data) {
    // 에외처리
    if (node === null) {
      return node;
    }

    if (node.data > data) {
      node.left = this.removeNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
    } else {
      // 3가지 조건
      if (node.left === null && node.right === null) {
        // child가 존재하지 않는 경우 해당 노드를 제거한다.
        return null;
      } else if (node.left === null) {
        // left가 존재하지 않는 경우 right를 부모로 올려준다.
        return node.right;
      } else if (node.right === null) {
        // right가 존재하지 않는 경우 left를 부모로 올려준다.
        return node.left;
      }

      // child가 모두 존재하는 경우 최소값을 찾은 후 node.data에 복사한 후 복사 값의 원본 데이터를 삭제한다.
      node.data = this.findMin(node.right);
      node.left = this.removeNode(node.left, node.data);
    }
    return node; 
  }

  findMin(node) {
    let min = node.data;

    while(node.left !== null) {
      min = node.left.data;
      node = node.left;
    }

    return min;
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


bst.insert(15); 
bst.insert(25); 
bst.insert(10); 
bst.insert(7); 
bst.insert(22); 
bst.insert(17); 
bst.insert(13); 
bst.insert(5); 
bst.insert(9); 
bst.insert(27); 

bst.remove(17)
bst.remove(5);
bst.remove(22)
bst.remove(27)
const rootNode = bst.getRootNode();
// console.log(rootNode)
bst.inorder(rootNode);
// bst.preorder(rootNode);
// bst.postorder(rootNode);