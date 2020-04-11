import { Sorter } from './sorter';
//import { NumbersCollection } from './numbersCollection';
import { NumbersCollection } from './numbersCollectionSelectionSort';

import { CharactersCollection } from './charactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([-999, 101, 18, 76, 0, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const numbersCollection = new NumbersCollection([-1000, 101, 18, 76, 0, 9]);
// numbersCollection.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('BahfulaHLGnhaa');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// const linkedListCollection = new LinkedList();
// linkedListCollection.add(1);
// linkedListCollection.add(100);
// linkedListCollection.add(-1);
// linkedListCollection.add(-115);
// linkedListCollection.add(197);

// linkedListCollection.sort();
// linkedListCollection.print();
