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
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    //arguments are verbose to demonstrate semantics more clearly
    CharactersCollection.prototype.compare = function (leftIndex, indexOfMin) {
        return (this.data[leftIndex].toLowerCase() < this.data[indexOfMin].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, indexOfMin) {
        var characters = this.data.split('');
        var leftMostValue = characters[leftIndex];
        characters[leftIndex] = characters[indexOfMin];
        characters[indexOfMin] = leftMostValue;
        this.data = characters.join('');
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        //allows length to be accessed as an attribute e.g. collection.length
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.equal = function (iterator, indexOfMin) {
        return (this.data[iterator].toLowerCase() === this.data[indexOfMin].toLowerCase());
    };
    return CharactersCollection;
}(SelectionSorter_1.SelectionSort));
exports.CharactersCollection = CharactersCollection;
