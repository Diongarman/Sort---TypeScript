export abstract class SelectionSort {
  abstract length: number;
  abstract indexOfMin: number;
  abstract compareToCurrMin(leftIndex: number): boolean;
  abstract equalToCurrMin(iterator: number): boolean;
  abstract swapWithCurrMin(iterator: number): void;
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      this.indexOfMin = i;

      for (let j = i + 1; j < length; j++) {
        if (this.compareToCurrMin(j)) {
          this.indexOfMin = j;
        }
      }
      if (!this.equalToCurrMin(i)) {
        this.swapWithCurrMin(i);
      }
    }
  }
}
