"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionSorter_1 = require("./SelectionSorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.indexMin = 0;
        return _this;
    }
    NumbersCollection.prototype.compareToCurrMin = function (leftIndex) {
        return this.data[leftIndex] < this.data[this.indexOfMin];
    };
    NumbersCollection.prototype.swapWithCurrMin = function (iterator) {
        var temp = this.data[this.indexOfMin];
        this.data[this.indexOfMin] = this.data[iterator];
        this.data[iterator] = temp;
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        //allows length to be accessed as an attribute e.g. collection.length
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumbersCollection.prototype, "indexOfMin", {
        get: function () {
            return this.indexMin;
        },
        set: function (index) {
            this.indexMin = index;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.equalToCurrMin = function (iterator) {
        return this.data[iterator] === this.data[this.indexOfMin];
    };
    return NumbersCollection;
}(SelectionSorter_1.SelectionSort));
exports.NumbersCollection = NumbersCollection;
