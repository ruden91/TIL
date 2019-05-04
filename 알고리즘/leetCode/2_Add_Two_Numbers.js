function ListNode(val) {
  this.val = val;
  this.next = null;
}
const getNumbersOfLinkedList = ll => {
  let numbers = "";
  let current = ll;

  while (current) {
    console.log(current.val);
    numbers += String(current.val);
    current = current.next;
  }
  return numbers;
};

const generateLinkedList = value => {
  let obj = null;

  for (let i = 0; i < value.length; i++) {
    if (obj === null) {
      obj = new ListNode(parseInt(value[i]));
    } else {
      let current = obj;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(parseInt(value[i]));
    }
  }

  return obj;
};

const addTwoNumbers = (l1, l2) => {
  const l1Number = getNumbersOfLinkedList(l1)
    .split("")
    .reverse()
    .join("");
  const l2Number = getNumbersOfLinkedList(l2)
    .split("")
    .reverse()
    .join("");

  const l3Number = String(parseInt(l1Number) + parseInt(l2Number))
    .split("")
    .reverse()
    .join("");

  return generateLinkedList(l3Number);
};

const testValue = [
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];
const testValue2 = [5, 6, 4];
const test1 = generateLinkedList(testValue.join(""));
const test2 = generateLinkedList(testValue2.join(""));
console.log(addTwoNumbers(test1, test2));
