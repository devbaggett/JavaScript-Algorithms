// recursiveFactorial

// Write a function recursiveFactorial, which accepts a number and returns the factorial of that number. A factorial is
// the product of an integer and all the integers below it.

// Example:
// Factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.

// Note: Factorial zero (0!) is always 1

function recursiveFactorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(7)); // 5040
