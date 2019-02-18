/**
 * es6+ version
 * 링크드 리스트를 활용한 스택구현
 */

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  pop() {
    if (this.length <= 0) {
      console.log('스택에 데이터가 존재하지 않습니다.')
      return;
    }
    let data = this.head.data;

    this.head = this.head.next;
    this.length--;

    return data;
  }

  isEmpty() {
    return !(this.length > 0);
  }

  getLength() {
    return this.length;
  }
}

const stack1 = new Stack();

stack1.push(50);
stack1.push(35);
stack1.push(20);
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.isEmpty())
console.log(stack1.getLength())