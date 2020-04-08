class Sorter {
  constructor(public collection: number[] | string) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - (i - 1); j++) {
        //block only works if collection is number[]
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        if (typeof this.collection === 'string') {
          console.log(j, this.collection);
          const left = this.collection[j].toLowerCase().charCodeAt(0);
          const right = this.collection[j + 1].toLowerCase().charCodeAt(0);
          if (left > right) {
            const temp = this.collection[j];
            this.collection.split('')[j] = this.collection[j + 1];
            this.collection.split('')[j + 1] = temp;
          }
        }
      }
    }
  }
}

//const sorter = new Sorter([-1, 100, 18, 76, 0, 9]);
const sorter = new Sorter('Xaaaa');
sorter.sort();
//should be sorted
console.log(sorter.collection);
