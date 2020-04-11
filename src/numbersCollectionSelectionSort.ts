import { SelectionSort } from './SelectionSorter';

export class NumbersCollection extends SelectionSort {
  private indexMin: number = 0;
  constructor(public data: number[]) {
    super();
  }

  compareToCurrMin(leftIndex: number): boolean {
    return this.data[leftIndex] < this.data[this.indexOfMin];
  }

  swapWithCurrMin(iterator: number): void {
    let temp = this.data[this.indexOfMin];
    this.data[this.indexOfMin] = this.data[iterator];
    this.data[iterator] = temp;
  }

  //allows length to be accessed as an attribute e.g. collection.length
  get length(): number {
    return this.data.length;
  }

  get indexOfMin(): number {
    return this.indexMin;
  }

  set indexOfMin(index: number) {
    this.indexMin = index;
  }

  equalToCurrMin(iterator: number) {
    return this.data[iterator] === this.data[this.indexOfMin];
  }
}
