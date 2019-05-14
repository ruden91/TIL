/**
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
  if (!root) {
    root = new TreeNode(val);
  } else {
    let currentNode = root;
    while (currentNode) {
      if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  return root;
};

const test = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
};

insertIntoBST(test, 5);
