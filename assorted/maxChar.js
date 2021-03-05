// Max Char

// Usage:
//      Given a string, return the character that is used most.

// Examples:
//      maxChar("Boogie Down") === "o"
//      maxChar("911") === "1"


function maxChar(str) {
    const charMap = {};
    let maxChar;
    let max = 0;
    for (let char of str) {
        // if adding 1 to char results in null, assign char to 1
        charMap[char] = charMap[char] + 1 || 1;
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
