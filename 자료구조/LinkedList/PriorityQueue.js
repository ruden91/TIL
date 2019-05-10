class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);

    if (!this.first || this.first.priority < priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let pointer = this.first;
      while (pointer.next && pointer.next.priority > priority) {
        pointer = pointer.next;
      }

      newNode.next = pointer.next;
      pointer.next = newNode;
    }
  }

  remove() {
    const value = this.first.val;
    this.first = this.first.next;

    console.log(value);

    return value;
  }
}

const pQueue = new PriorityQueue();

pQueue.insert(10, 10);
pQueue.insert(5, 13);
pQueue.insert(1, 15);
pQueue.insert(4, 12);
pQueue.insert(9, 11);

pQueue.remove();

console.log(JSON.stringify(pQueue.first));
