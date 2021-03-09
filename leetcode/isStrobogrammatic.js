// 246. Strobogrammatic Number

// Given a string num which represents an integer, return true if num is a strobogrammatic number.
// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

const isStrobogrammatic = num => {
    const map = {"1": "1", "6": "9", "8": "8", "9": "6", "0": "0"};
    if (num.length % 2 === 1) {
        const mid = Math.floor(num.length / 2);
        if (map[num[mid]] !== num[mid]) return false;
    }
    let [left, right] = [0, num.length - 1];
    while (left <= right) {
        if (map[num[left++]] !== num[right--]) return false;
    }
    return true;
};

console.log(isStrobogrammatic("69")); // true
console.log(isStrobogrammatic("88")); // true
console.log(isStrobogrammatic("962")); // false
console.log(isStrobogrammatic("1")); // true
console.log(isStrobogrammatic("101")); // true
console.log(isStrobogrammatic("659")); // false
