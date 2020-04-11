"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            this.indexOfMin = i;
            for (var j = i + 1; j < length; j++) {
                if (this.compareToCurrMin(j)) {
                    this.indexOfMin = j;
                }
            }
            if (!this.equalToCurrMin(i)) {
                this.swapWithCurrMin(i);
            }
        }
    };
    return SelectionSort;
}());
exports.SelectionSort = SelectionSort;
