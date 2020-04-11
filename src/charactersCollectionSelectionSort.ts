import { SelectionSort } from './SelectionSorter';

export class CharactersCollection extends SelectionSort {
  constructor(public data: string) {
    super();
  }

  //arguments are verbose to demonstrate semantics more clearly
  compare(leftIndex: number, indexOfMin: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() < this.data[indexOfMin].toLowerCase()
    );
  }

  swap(leftIndex: number, indexOfMin: number): void {
    let characters = this.data.split('');

    const leftMostValue = characters[leftIndex];
    characters[leftIndex] = characters[indexOfMin];
    characters[indexOfMin] = leftMostValue;

    this.data = characters.join('');
  }

  //allows length to be accessed as an attribute e.g. collection.length
  get length(): number {
    return this.data.length;
  }

  equal(iterator: number, indexOfMin: number) {
    return (
      this.data[iterator].toLowerCase() === this.data[indexOfMin].toLowerCase()
    );
  }
}
