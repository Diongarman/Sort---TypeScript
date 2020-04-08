"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([-1, 100, 18, 76, 0, 9]);
sorter.sort();
//should be sorted
console.log(sorter.collection);
