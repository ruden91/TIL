/**
 * selection sort
 * best case: O(n^2)
 * avg case: O(n^2)
 * worst case: O(n^2)
 */
const { getRandomArr } = require("./utils");

const examples = [];
for (let i = 0; i < 5; i++) {
  examples.push(getRandomArr(30));
}

const selectionSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

for (let example of examples) {
  console.log(selectionSort(example));
}
