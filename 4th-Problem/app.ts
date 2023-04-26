export function indexOfTargetInteger(array: number[], target: number): number {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let midIndex = Math.floor((start + end) / 2);
        if (array[midIndex] == target) {
            return midIndex;
        } else if (target > array[midIndex]) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
    return -1;
}
console.log(indexOfTargetInteger([1, 2, 3, 4, 5], 7));