class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return '현재 queue에 값이 없습니다.';
    }

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    console.log(this.items.join(','));
  }
}

const q = new Queue();

q.enqueue(5);
q.enqueue(2);
q.enqueue(3);
q.enqueue(1);
q.enqueue(4);

q.dequeue();

q.printQueue();