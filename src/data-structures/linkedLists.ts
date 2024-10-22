class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  search(value: number): ListNode | null {
    let current = this.head;
    while (current !== null) {
      if (current.val === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  length(): number {
    let current = this.head;
    let length = 0;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

let sum = 9 + 9 + 0;
let digit = sum % 10;
let carry = digit !== sum ? Math.floor(sum / 10) : 0;

let l1 = undefined;
let l2 = undefined;
let carrys = 0;
let count = 0;

while (l1 !== null || l2 !== null || carrys !== 0) {
  l1 = null;
  if (count === 5) l2 = null;
  carrys = 0;
  count++;
}
