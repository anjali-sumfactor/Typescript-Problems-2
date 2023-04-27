//9. Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.

export function maxSubarraySum(array: number[]): number {
    let output: number = array[0];
    let max: number = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        max = Math.max(max + array[i], array[i]);
        output = Math.max(output, max);
    }
    return output;
}
console.log(maxSubarraySum([2,-3,5,-1,2,6,-2,4]));