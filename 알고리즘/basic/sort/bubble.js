const { getRandomArr } = require('./utils');

const examples = [];
for (let i = 0; i < 5; i++) {
  examples.push(getRandomArr(30));
}

const bubbleSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

for (let example of examples) {
  console.log(bubbleSort(example));  
}