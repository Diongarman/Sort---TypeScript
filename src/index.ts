import { Sorter } from './sorter';
import { NumbersCollection } from './numbersCollection';
import { CharactersCollection } from './charactersCollection';

// const numbersCollection = new NumbersCollection([-1000, 101, 18, 76, 0, 9]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('BahfulaHLGnhaa');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
