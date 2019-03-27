const { getRandomArr } = require("./utils");
/**
 * merge sort algorithm
 * best O(nlogn)
 * avg O(nlogn)
 * worst O(nlogn)
 */
const examples = [];
for (let i = 0; i < 10; i++) {
  examples.push(getRandomArr(50));
}

const merge = (left = [], right = []) => {
  const temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      temp.push(right[rightIndex]);
      rightIndex++;
    } else {
      temp.push(left[leftIndex]);
      leftIndex++;
    }
  }

  return [...temp, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const mergeSort = (arr = []) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

for (let example of examples) {
  console.log(JSON.stringify(example));
  console.log(JSON.stringify(mergeSort(example)));
}
