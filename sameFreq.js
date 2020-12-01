// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same
// frequency of digits.


// O(n log n)
function intToOrderedString(int) {
    return int.toString().split("").sort().join("");
}

function sameFrequency(int1, int2) {
    let str1 = intToOrderedString(int1);
    let str2 = intToOrderedString(int2);
    return str1 === str2;
}

// O(n)
function sameFrequency2(num1, num2) {
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
        return false;
    }

    let numCount1 = {};
    for (let num of numStr1) {
        numCount1[num] ? numCount1[num]++ : numCount1[num] = 1;
    }

    let numCount2 = {};
    for (let num of numStr2) {
        numCount2[num] ? numCount2[num]++ : numCount2[num] = 1;
    }

    for (let key in numCount1) {
        if (numCount1[key] !== numCount2[key]) {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency2(182, 281));
console.log(sameFrequency2(32, 14));
console.log(sameFrequency2(3589578, 5879385));
console.log(sameFrequency2(22, 222));
