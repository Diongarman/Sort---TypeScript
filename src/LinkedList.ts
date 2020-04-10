import { Sorter } from './sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      this.head = node;
      return 0;
    }

    const i = 1;
    let node = this.head;
    while (node.next) {
      i++;
      node = node.next;
    }
    return i;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    const leftMostValue = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftMostValue;
  }

  print(): void {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
