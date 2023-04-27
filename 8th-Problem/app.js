//8. Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.
function canFormPalindrome(string) {
    var hasMap = {};
    for (var i = 0; i < string.length; i++) {
        var ch = string.charAt(i);
        if (hasMap[ch])
            hasMap[ch]++;
        else
            hasMap[ch] = 1;
    }
    var oddCount = 0;
    for (var key in hasMap) {
        if (hasMap[key] % 2 == 1) {
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true;
}
console.log(canFormPalindrome("abdabed"));
