"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numbersCollection_1 = require("./numbersCollection");
var numbersCollection = new numbersCollection_1.NumbersCollection([-1, 100, 18, 76, 0, 9]);
var sorter = new sorter_1.Sorter(numbersCollection);
//const sorter = new Sorter('Xaaaa');
sorter.sort();
//should be sorted
console.log(numbersCollection.data);
