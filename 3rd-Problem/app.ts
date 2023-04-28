//3. Write a function that takes a string as input and returns the length of the longest palindromic substring.

export function longestPalindromicSubstring(s: string): number {
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        let length1 = expandAroundCenter(s, i, i);
        let length2 = expandAroundCenter(s, i, i + 1);
        maxLength = Math.max(maxLength, length1, length2);
    }
    return maxLength;
}

function expandAroundCenter(s: string, left: number, right: number): number {
    let length = 0;

    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        length += (left === right) ? 1 : 2;
        left--;
        right++;
    }
    return length;
}
console.log(longestPalindromicSubstring("abacdcaberg"));