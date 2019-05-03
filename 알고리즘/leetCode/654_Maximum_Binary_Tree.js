/**
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].
 */
const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) {
    return null;
  }

  const max = Math.max.apply(null, nums);
  const index = nums.findIndex(v => v === max);
  const left = nums.slice(0, index);
  const right = nums.slice(index + 1);

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(left);
  root.right = constructMaximumBinaryTree(right);

  return root;
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]); // [6,3,5,null,2,0,null,null,1]
