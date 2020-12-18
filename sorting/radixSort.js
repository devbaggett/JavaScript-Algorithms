// radixSort

// Radix sort is a special sorting algorithm that works on lists of numbers; it doesn't make comparisons


// helper
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// helper
function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// helper
function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let num of nums) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }
        nums = [].concat(...buckets);
    }
    return nums;
}

let numArr = [3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];

console.log(radixSort(numArr));
