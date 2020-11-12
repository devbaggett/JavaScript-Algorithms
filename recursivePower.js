// recursivePower

// Write a function called recursivePower which accepts a base and an exponent. The function should return the
// recursivePower of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry
// about negative bases and exponents.

function recursivePower(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * recursivePower(base, exponent - 1);
}

console.log(recursivePower(2, 0)); // 1
console.log(recursivePower(2, 2)); // 4
console.log(recursivePower(2, 4)); // 16
console.log(recursivePower(3, 3)); // 27
