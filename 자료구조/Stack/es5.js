/**
 * es5 
 * 링크드 리스트를 활용한 스택구현
 */

function Node(value) {
  this.data = value;
  this.next = null;
}

function Stack() {
  this.head = null;
  this.length = 0;
}

Stack.prototype.push = function(value) {
  var node = new Node(value);

  if (!this.head) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  this.length++;
}

Stack.prototype.pop = function() {
  if (this.length <= 0) {
    return;
  }
  var data = this.head.data;
  this.head = this.head.next;
  this.length--;

  return data;
}

Stack.prototype.isEmpty = function() {
  return !(this.length > 0);
}

Stack.prototype.getLength = function() {
  return this.length;
}

var stack1 = new Stack();

stack1.push(5);
stack1.push(15);
stack1.push(30);
stack1.pop();
console.log(stack1.getLength());
console.log(stack1.isEmpty());