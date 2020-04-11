"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.prototype.sort = function () {
        var length = this.length;
        var indexOfMin;
        for (var i = 0; i < length; i++) {
            indexOfMin = i;
            for (var j = i + 1; j < length; j++) {
                if (this.compare(j, indexOfMin)) {
                    indexOfMin = j;
                }
            }
            if (!this.equal(i, indexOfMin)) {
                this.swap(i, indexOfMin);
            }
        }
    };
    return SelectionSort;
}());
exports.SelectionSort = SelectionSort;
//clean up index of min, don't need to use setters in numCollection.ts
