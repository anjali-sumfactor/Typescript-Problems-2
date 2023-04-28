"use strict";
//3. Write a function that takes a string as input and returns the length of the longest palindromic substring.
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindromicSubstring = void 0;
function longestPalindromicSubstring(s) {
    var maxLength = 1;
    for (var i = 0; i < s.length; i++) {
        var length1 = expandAroundCenter(s, i, i);
        var length2 = expandAroundCenter(s, i, i + 1);
        maxLength = Math.max(maxLength, length1, length2);
    }
    return maxLength;
}
exports.longestPalindromicSubstring = longestPalindromicSubstring;
function expandAroundCenter(s, left, right) {
    var length = 0;
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        length += (left === right) ? 1 : 2;
        left--;
        right++;
    }
    return length;
}
console.log(longestPalindromicSubstring("abacdcaberg"));
