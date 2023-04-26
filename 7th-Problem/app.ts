//7. Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order.

function commonSortedElements(array1: number[], array2: number[]): number[] {
    let common: any[] = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                common.push(array1[i]);
            }
        }
    }
    return common.sort((a, b) => a - b);
}
console.log(commonSortedElements([13, 2, 3, 1], [4, 1, 5, 3, 11, 13, 80]));

export function commonElements(array1: number[], array2: number[]): number[] {
    let arr: number[] = [];
    for (let i = 0; i < array1.length; i++) {
        array2.includes(array1[i]) && arr.push(array1[i]);
    }
    return arr.sort((a: number, b: number) => a - b);
}
console.log(commonElements([1, 2, 3, 13], [4, 1, 5, 3, 11, 13, 80]));