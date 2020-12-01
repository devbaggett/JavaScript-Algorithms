// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function which accepts a variable number of arguments, and checks whether there are any duplicates
// amount the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers
// pattern.

// Restrictions:

// Time - o(n)
// Space - o(n)

// function areThereDuplicates() {
//     let dict = {};
//     for (let i = 0; i < arguments.length; i++) {
//         if (!dict[arguments[i]]) {
//             dict[arguments[i]] = arguments[i];
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

// Bonus:

// Time - o(n log n)
// Space - o(1)

function areThereDuplicates(...args) {
    args.sort((a, b) => a.toString().charCodeAt(0) - b.toString().charCodeAt(0));
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }


console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates(3, 1, 1, 2, 3)); // true
