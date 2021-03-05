// Reverse Integer

// Directions:
//      Given an integer, returns the integer in reverse.

// Examples:
//      reverseInt(21) === 21
//      reverseInt(391) === 193
//      reverseInt(400) === 4
//      reverseInt(-45) === -54
//      reverseInt(-50) === -5


// FUNCTION #1
// function reverseInt(int) {
//     let reversed = int.toString().split('').reverse();
//     if (reversed[reversed.length - 1] === '-') {
//         reversed.pop();
//         return -parseInt(reversed.join(''));
//     } else {
//         return parseInt(reversed.join(''));
//     }
// }

// FUNCTION #2
function reverseInt(int) {
    const reversed = int.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(int);
}

module.exports = reverseInt;
