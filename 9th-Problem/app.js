"use strict";
//9. Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubarraySum = void 0;
function maxSubarraySum(array) {
    var output = array[0];
    var max = array[0];
    for (var i = 0; i < array.length - 1; i++) {
        max = Math.max(max + array[i], array[i]);
        output = Math.max(output, max);
    }
    return output;
}
exports.maxSubarraySum = maxSubarraySum;
console.log(maxSubarraySum([3, -7, 4, 9, -5]));
