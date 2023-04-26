"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOfTargetInteger = void 0;
function indexOfTargetInteger(array, target) {
    var start = 0;
    var end = array.length - 1;
    while (start < end) {
        var midIndex = Math.floor((start + end) / 2);
        if (array[midIndex] == target) {
            return midIndex;
        }
        else if (target > array[midIndex]) {
            start = midIndex + 1;
        }
        else {
            end = midIndex - 1;
        }
    }
    return -1;
}
exports.indexOfTargetInteger = indexOfTargetInteger;
console.log(indexOfTargetInteger([1, 2, 3, 4, 5], 7));
