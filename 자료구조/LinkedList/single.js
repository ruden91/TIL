/**
 * 단순 연결리스트
 * 탐색 시간복잡도 O(n)
 * 삽입 시간복잡도 O(n)
 * 제거 시간복잡도 O(n)
 * 탐색, 삽입, 제거 모두 해당 동작 이전에 특정 노드 탐색을 실시하기 때문에 O(n)
 * 단, head 바로 앞쪽에 데이터를 삽입할 경우 O(1)
 */
class SinglelyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNode(value) {
    const node = {
      value,
      next: null
    }

    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  removeNode() {
    if (!this.head) {
      console.log('노드가 존재하지않습니다.')
      return;
    }
    let currentNode = this.head;
    let prevNode = currentNode;
    while(currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.length--;
  }

  printLinkedList() {
    let tempArr = [];
    let currentNode = this.head
    if (!currentNode) {
      console.log('현재 존재하는 노드가 없습니다.');
      return;
    }
    
    while(currentNode) {
      tempArr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(tempArr.join('->'))
  }

  findNode(num) {
    let currentNode = this.head;

    if (num > this.length) {
      console.log('해당 인덱스에 값이 존재하지 않습니다.');

      return;
    }

    if (!currentNode.next && num === 0) {
      console.log(`첫 번째 노드의 값은 ${currentNode.value}`);
    }

    for (let i = 1; i < this.length; i++) {
      currentNode = currentNode.next;
      if (i === num) {
        console.log(`${i}번째 노드는 ${currentNode.value}`)
      }
    }
  }
}

const sl = new SinglelyLinkedList();

sl.addNode(10);
sl.addNode(12);
sl.addNode(15);
sl.addNode(9);
sl.addNode(3);
sl.addNode(7);
sl.addNode(1);

sl.removeNode();
sl.removeNode();

sl.findNode(2);
sl.findNode(4);

sl.printLinkedList();

