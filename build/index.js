"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - (i - 1); j++) {
                //block only works if collection is number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                if (typeof this.collection === 'string') {
                    console.log(j, this.collection);
                    var left = this.collection[j].toLowerCase().charCodeAt(0);
                    var right = this.collection[j + 1].toLowerCase().charCodeAt(0);
                    if (left > right) {
                        var temp = this.collection[j];
                        this.collection.split('')[j] = this.collection[j + 1];
                        this.collection.split('')[j + 1] = temp;
                    }
                }
            }
        }
    };
    return Sorter;
}());
//const sorter = new Sorter([-1, 100, 18, 76, 0, 9]);
var sorter = new Sorter('Xaaaa');
sorter.sort();
//should be sorted
console.log(sorter.collection);
