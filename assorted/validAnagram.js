// Determine whether or not two strings are anagrams

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const dict1 = {};
//     const dict2 = {};
//     for (let char of str1) {
//         dict1[char] = (dict1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         dict2[char] = (dict2[char] || 0) + 1;
//     }
//     for (let key in dict1) {
//         if (!(key in dict2)) {
//             return false;
//         }
//         if (dict1[key] !== dict2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

function validAnagram(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false;
    }
    let dict = {};
    for (let char of stringA) {
        dict[char] ? dict[char]++ : dict[char] = 1;
    }
    for (let char of stringB) {
        if (!dict[char]) {
            return false;
        } else {
            dict[char]--;
        }
    }
    return true;
}

console.log(validAnagram("awesomea", "awesomef")); // false
console.log(validAnagram("awesomef", "fawesome")); // true
