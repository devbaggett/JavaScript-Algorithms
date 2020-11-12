// range

// Write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function range(num) {
    if (num === 1) {
        return 1;
    }
    return num + range(num - 1);
}

console.log(range(6)); // 21
console.log(range(10)); // 55
