"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPalindrome = void 0;
function validPalindrome(string) {
    var left = 0;
    var right = string.length - 1;
    while (left <= right) {
        if (string.charAt(left) != string.charAt(right)) {
            return isPalindrome(string, left + 1, right) || isPalindrome(string, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}
exports.validPalindrome = validPalindrome;
//Logic to check palindrome
function isPalindrome(string, start, end) {
    while (start <= end) {
        if (string.charAt(start) != string.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(validPalindrome("dabbada"));
