import { Sorter } from './sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //arguments are verbose to demonstrate semantics more clearly
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftMostValue = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftMostValue;
  }

  //allows length to be accessed as an attribute e.g. collection.length
  get length(): number {
    return this.data.length;
  }
}
