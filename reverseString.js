// Reverse String - 5 different ways to reverse a string


// INSTRUCTIONS:
//      Given a string, return a new string with the reversed order of characters

// EXAMPLES:
//      reverse('hello') === 'olleh'
//      reverse('spaces   ') === '   secaps'


// // FUNCTION #1
// function reverseString(str) {
//     let reversed_string = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed_string.push(str[i]);
//     }
//     return reversed_string.join("");
// }
//
// // FUNCTION #2
// function reverseString(str) {
//     let reversed_string = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed_string += str[i];
//     }
//     return reversed_string;
// }
//
// // FUNCTION #3
// function reverseString(str) {
//     let reversed_string = "";
//     for (let character of str) {
//         reversed_string = character + reversed_string;
//     }
//     return reversed_string;
// }
//
// // FUNCTION #4
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// FUNCTION #5
function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

console.log(reverseString('apple'));

module.exports = reverseString;