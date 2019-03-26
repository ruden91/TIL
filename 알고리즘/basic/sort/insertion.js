/**
 * insertion sort algorithm
 * best O(n)
 * avg O(n^2)
 * worst O(n^2)
 */
const { getRandomArr } = require("./utils");

const examples = [];
for (let i = 0; i < 5; i++) {
  examples.push(getRandomArr(20));
}

const insertionSort = (arr = []) => {
  if (arr.length < 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let index = i - 1;

    while (index >= 0 && arr[index] > key) {
      arr[index + 1] = arr[index];
      index--;
    }

    arr[index + 1] = key;
  }

  return arr;
};

for (let example of examples) {
  console.log(JSON.stringify(example));
  console.log(JSON.stringify(insertionSort(example)));
}
