// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string. In other words, the function should check whether the
// characters in the first string appear somewhere in the second string, without their order changing.

// Your solution must have at least the following complexities:
// Time - o(n + m)
// Space - o(1)

// iterative
// function isSubsequence(str1, str2) {
//     if (!str1) {
//         return true;
//     }
//
//     let i = 0;
//     let j = 0;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) {
//             i++;
//         }
//         if (i === str1.length) {
//             return true;
//         }
//         j++;
//     }
//     return false;
// }

// recursive, but not o(1)
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
