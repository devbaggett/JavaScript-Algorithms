// 28. implement strStr()

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string.
// This is consistent to C's ' + 'strstr() and Java's indexOf().

// slow
// function strStr(haystack, needle) {
//     if (needle.length < 1) {
//         return 0;
//     }
//     if (haystack.length < needle.length) {
//         return -1;
//     }
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             let j = 0;
//             let k = i;
//             while (haystack[k] === needle[j]) {
//                 k++;
//                 j++;
//                 if (j === needle.length) {
//                     return k - needle.length;
//                 }
//             }
//         }
//     }
//     return -1;
// }

// fast
function strStr(haystack, needle) {
    if (needle.length < 1) {
        return 0;
    } else if (haystack.length < needle.length) {
        return -1;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let sub = haystack.slice(i, needle.length + i);
        if (sub === needle) {
            return i;
        }
    }
    return -1;
}

console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0
console.log(strStr("mississippi", "issip")); // 4
console.log(strStr("a", "a")); // 0
