// isPalindrome

// Instructions:
//      Given a string, return true if string is palindrome and false if not.

// Examples:
//      isPalindrome("taco cat") === true
//      isPalindrome("burrito cat") === false

const reverseString = require('./reverseString');

// Uses JS 'every' function to iterate through first half of array and compare each char to its counterpart at end
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }

function palindrome(str) {
    return str === reverseString(str);
}

module.exports = palindrome;
