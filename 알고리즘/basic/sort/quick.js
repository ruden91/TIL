const { getRandomArr } = require("./utils");
/**
 * quick sort algorithm
 * best O(nlogn)
 * avg O(nlogn)
 * worst O(n^2)
 */
const examples = [];
for (let i = 0; i < 10000; i++) {
  examples.push(getRandomArr(10000));
}

const quickSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
for (let example of examples) {
  console.log(JSON.stringify(example));
  console.log(JSON.stringify(quickSort(example)));
}
