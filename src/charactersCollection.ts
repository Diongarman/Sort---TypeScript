import { Sorter } from './sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  //arguments are verbose to demonstrate semantics more clearly
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split('');

    const leftMostValue = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftMostValue;

    this.data = characters.join('');
  }

  //allows length to be accessed as an attribute e.g. collection.length
  get length(): number {
    return this.data.length;
  }
}
