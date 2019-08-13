/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

const searchInsert = function(nums, target) {
  let index = nums.findIndex(v => v === target);
  if (index > -1) {
    return index;
  } else {
    for (let num of nums) {
      if (num > target) {
        index = nums.findIndex(v => v === num);
        break;
      }
    }

    return index !== -1 ? index : nums.length;
  }
};

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4
