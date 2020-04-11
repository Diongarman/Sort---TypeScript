export abstract class SelectionSort {
  abstract length: number;
  abstract compare(leftIndex: number, indexOfMin: number): boolean;
  abstract equal(iterator: number, indexOfMin: number): boolean;
  abstract swap(iterator: number, indexOfMin: number): void;
  sort(): void {
    const { length } = this;
    let indexOfMin;
    for (let i = 0; i < length; i++) {
      indexOfMin = i;

      for (let j = i + 1; j < length; j++) {
        if (this.compare(j, indexOfMin)) {
          indexOfMin = j;
        }
      }
      if (!this.equal(i, indexOfMin)) {
        this.swap(i, indexOfMin);
      }
    }
  }
}

//clean up index of min, don't need to use setters in numCollection.ts
