//8. Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.

function canFormPalindrome(string: string): boolean {
    let hasMap: object = {};
    for (let i = 0; i < string.length; i++) {
        let ch = string.charAt(i);
        if (hasMap[ch])
            hasMap[ch]++;
        else
            hasMap[ch] = 1;
    }

    let oddCount: number = 0;
    for (const key in hasMap) {
        if (hasMap[key] % 2 == 1) {
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true;
}
console.log(canFormPalindrome("abdabed"));