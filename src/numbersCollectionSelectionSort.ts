import { SelectionSort } from './SelectionSorter';

export class NumbersCollection extends SelectionSort {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, indexOfMin: number): boolean {
    return this.data[leftIndex] < this.data[indexOfMin];
  }

  swap(iterator: number, indexOfMin: number): void {
    let temp = this.data[indexOfMin];
    this.data[indexOfMin] = this.data[iterator];
    this.data[iterator] = temp;
  }

  //allows length to be accessed as an attribute e.g. collection.length
  get length(): number {
    return this.data.length;
  }

  equal(iterator: number, indexOfMin: number) {
    return this.data[iterator] === this.data[indexOfMin];
  }
}
