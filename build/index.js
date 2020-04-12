"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { LinkedList } from './LinkedList';
var LinkedListSelectionSort_1 = require("./LinkedListSelectionSort");
// const charactersCollection = new CharactersCollection(
//   'pOPThesEGuYsLikeAWheeLiE'
// );
// charactersCollection.sort();
// console.log(charactersCollection.data);
// const numbersCollection = new NumbersCollection([-999, 101, 18, 76, 0, 69]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const numbersCollection = new NumbersCollection([-1000, 101, 18, 76, 0, 9]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('BahfulaHLGnhaa');
// charactersCollection.sort();
// console.log(charactersCollection.data);
var linkedListCollection = new LinkedListSelectionSort_1.LinkedList();
linkedListCollection.add(1);
linkedListCollection.add(105);
linkedListCollection.add(-1);
linkedListCollection.add(-115);
linkedListCollection.add(297);
linkedListCollection.sort();
linkedListCollection.print();
