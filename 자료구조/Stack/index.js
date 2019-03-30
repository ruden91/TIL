// simple stack
class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    
    return this.items.pop();
  }
}

module.exports = Stack;