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
        return _this;
    }
    NumbersCollection.prototype.compare = function (leftIndex, indexOfMin) {
        return this.data[leftIndex] < this.data[indexOfMin];
    };
    NumbersCollection.prototype.swap = function (iterator, indexOfMin) {
        var temp = this.data[indexOfMin];
        this.data[indexOfMin] = this.data[iterator];
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
    NumbersCollection.prototype.equal = function (iterator, indexOfMin) {
        return this.data[iterator] === this.data[indexOfMin];
    };
    return NumbersCollection;
}(SelectionSorter_1.SelectionSort));
exports.NumbersCollection = NumbersCollection;
