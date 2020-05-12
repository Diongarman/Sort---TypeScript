"use strict";
//write abstract MSort class
//identify abstract methods in M Sort
//Identify concrete methods in M sort
//write child of M Sort class. Chil class should implement parents required abstract methods.
//numbers
//strings
//Linked List
// export abstract class MergeSort {
//   abstract length: number;
//   abstract merge(left: any[], right: any[]): void;
//   sort(): void {
//     let midIndex = Math.floor(arr.length / 2);
//     if (arr.length === 1) {
//       return arr;
//     }
//     const left = arr.slice(0, midIndex);
//     const right = arr.slice(midIndex);
//     return this.merge(this.merge(left), mergeSort(right));
//   }
//   merge(left: any[], right: any[]) {
//     let results = [];
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         results.push(left.shift());
//       } else {
//         results.push(right.shift());
//       }
//     }
//     //                   [1,2,3]  [4,5,6]
//     //                   []       [4,5,6]
//     //                   [1,2,3]  []
//     //order of right or left doesn't matter, one will be empty at this point
//     return [...results, ...left, ...right];
//   }
// }
