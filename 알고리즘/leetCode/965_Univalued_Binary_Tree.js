/**
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false 
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
 * @return {boolean}
 */
const getValue = node => {
  if (!node) {
    return [];
  }

  return [node.val, ...getValue(node.left), ...getValue(node.right)];
};
const isUnivalTree = root => {
  if (!root) {
    return [];
  }

  const result = getValue(root);
  return !(result.filter(v => v !== result[0]).length > 0);
};
