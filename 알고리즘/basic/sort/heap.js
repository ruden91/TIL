const heapify = (heap, i, max) => {
  let index, leftChild, rightChild;

  while (i < max) {
    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if (index === i) {
      break;
    }

    [heap[i], heap[index]] = [heap[index], heap[i]];
    i = index;
  }
};
const buildMaxHeap = arr => {
  let i = Math.floor(arr.length / 2 - 1);

  while (i >= 0) {
    heapify(arr, i, arr.length);
    i--;
  }
};

const heapSort = arr => {
  // build max heap
  buildMaxHeap(arr);

  let lastElement = arr.length - 1;

  while (lastElement > 0) {
    [arr[0], arr[lastElement]] = [arr[lastElement], arr[0]];

    heapify(arr, 0, lastElement);
    lastElement--;
  }

  return arr;
};

const data = [10, 5, 4, 2, 3, 1];

console.log(heapSort(data));
