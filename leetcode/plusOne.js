// #66 Plus One

// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array
// contains a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself.

const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
// Explanation: The array represents the integer 123.

console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

console.log(plusOne([0])); // [1]

console.log(plusOne([9])); // [1, 0]
