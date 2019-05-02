/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = nums => {
  const copiedNums = [...nums];

  for (let i = 0; i < nums.length; i++) {
    const left = copiedNums.slice(0, i);
    const right = copiedNums.slice(i + 1);
    let counter = 0;
    const combined = right.concat(left);

    // 비교 (끝까지 가기 전에 큰 값이 있으면 break 반환, 끝까지 조회했는데 없다면 -1);
    while (counter <= combined.length) {
      if (counter === combined.length) {
        nums[i] = -1;
        break;
      } else if (nums[i] < combined[counter]) {
        nums[i] = combined[counter];
        break;
      }

      counter++;
    }
  }

  return nums;
};

nextGreaterElements([1, 2, 1]); // [2, -1, 2]
nextGreaterElements([1, 4, 2, 5, 7, 2, 1, 3, 4, 5, 6]); // [4,5,5,7,-1,3,3,4,5,6,7]
nextGreaterElements([5, 4, 3, 2, 1]); // [-1,5,5,5,5]
