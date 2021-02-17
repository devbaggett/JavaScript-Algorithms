// 8. String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer

// const myAtoi = s => {
//     return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648);
// };

const myAtoi = str => {
    str = str.trimStart();
    const isDigit = /[\d+-]/;
    // is first char +, -, or digit?
    if (!isDigit.test(str[0])) {
        return 0;
    }
    const isValidNumber = /[+-]?\d*/;
    // matches optional +- followed by (\d*) zero or more digits not separated by space(s)
    const number = Number(str.match(isValidNumber));
    if (Number.isNaN(number)) {
        return 0;
    }
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);
    if (number > maxInt) {
        return maxInt;
    } else if (number < minInt) {
        return minInt;
    } else {
        return number;
    }
};

console.log(myAtoi("42"));
console.log(myAtoi("-42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
