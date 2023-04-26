"use strict";
//7. Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order.
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonElements = void 0;
function commonSortedElements(array1, array2) {
    var common = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                common.push(array1[i]);
            }
        }
    }
    return common.sort(function (a, b) { return a - b; });
}
console.log(commonSortedElements([13, 2, 3, 1], [4, 1, 5, 3, 11, 13, 80]));
function commonElements(array1, array2) {
    var arr = [];
    for (var i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr.sort(function (a, b) { return a - b; });
}
exports.commonElements = commonElements;
console.log(commonElements([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));
