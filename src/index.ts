import { Sorter } from './sorter';
//import { NumbersCollection } from './numbersCollection';
import { NumbersCollection } from './numbersCollectionSelectionSort';

//import { CharactersCollection } from './charactersCollection';
import { CharactersCollection } from './charactersCollectionSelectionSort';

// import { LinkedList } from './LinkedList';
import { LinkedList } from './LinkedListSelectionSort';

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

const linkedListCollection = new LinkedList();
linkedListCollection.add(1);
linkedListCollection.add(105);
linkedListCollection.add(-1);
linkedListCollection.add(-115);
linkedListCollection.add(297);

linkedListCollection.sort();
linkedListCollection.print();
