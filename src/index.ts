class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  sort(): void {}
}

const sorter = new Sorter([-1, 100, 18, 76, 0, 9]);
sorter.sort();
//should be sorted
console.log(sorter.collection);
