import { Sorter } from './sorter';
import { NumbersCollection } from './numbersCollection';

const numbersCollection = new NumbersCollection([-1, 100, 18, 76, 0, 9]);
const sorter = new Sorter(numbersCollection);
//const sorter = new Sorter('Xaaaa');
sorter.sort();
//should be sorted
console.log(numbersCollection.data);
