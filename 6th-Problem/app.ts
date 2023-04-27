//6. Write a function that takes a string as input and returns true if the string is a valid palindrome after removing exactly one character, and false otherwise.

export function validPalindrome(string: string): boolean {
    let left = 0;
    let right = string.length - 1;

    while (left <= right) {
        if (string.charAt(left) != string.charAt(right)) {
            return isPalindrome(string, left + 1, right) || isPalindrome(string, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

//Logic to check palindrome
function isPalindrome(string: string, start: number, end: number) {
    while (start <= end) {
        if (string.charAt(start) != string.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(validPalindrome("dabbada"))