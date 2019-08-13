class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  // 중복 없애기
  deleteDups() {
    const hashMap = new Map();

    let current = this.head;
    let previous = null;

    while (current) {
      if (hashMap.has(current.data)) {
        previous.next = current.next;
        this.size -= 1;
      } else {
        hashMap.set(current.data);
      }
      previous = current;
      current = current.next;
    }
  }

  print() {
    console.log(this.head);
  }
}

const sll = new SinglyLinkedList();

sll.addNode(5);
sll.addNode(4);
sll.addNode(2);
sll.addNode(4);
sll.addNode(8);
sll.addNode(8);
sll.addNode(10);

sll.deleteDups();

sll.print();
