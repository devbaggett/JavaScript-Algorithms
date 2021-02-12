// sumDigits

// Write a method to repeatedly add all of its digits until the result has only one digit

function sumDigits(num) {
    let numLength = num.toString().length;
    if (numLength < 2) {
        return num;
    }
    let nums = num.toString();
    let sum;
    while (numLength > 1) {
        sum = 0;
        for (let n of nums) {
            sum += parseInt(n);
        }
        numLength = sum.toString().length;
        nums = sum.toString();
    }
    return sum;
}

console.log(sumDigits(1)); // 1
console.log(sumDigits(49)); // 4
console.log(sumDigits(439230)); // 3
