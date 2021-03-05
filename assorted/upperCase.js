// Determine if first char of string is uppercase or not

function upperCase(str) {
    const regexp = /^[A-Z]/;
    return regexp.test(str);
}

let s1 = "Abcd";
let s2 = "aCcd";

console.log(upperCase(s1)); // true
console.log(upperCase(s2)); // false
