// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// O(n)
// function maxProductOfThreeNumbers(nums) {
//     let highestProductOfThree = nums[0] * nums[1] * nums[2];
//
//     let highestProductOfTwo = nums[0] * nums[1];
//     let lowestProductOfTwo = nums[0] * nums[1];
//
//     let highestMax = Math.max(nums[0], nums[1]);
//     let lowestMin = Math.min(nums[0], nums[1]);
//
//     for (let num of nums.slice(2)) {
//         highestProductOfThree = Math.max(highestProductOfThree, num * highestProductOfTwo, num * lowestProductOfTwo);
//
//         highestProductOfTwo = Math.max(highestProductOfTwo, num * highestMax, num * lowestMin);
//         lowestProductOfTwo = Math.min(lowestProductOfTwo, num * highestMax, num * lowestMin);
//
//         highestMax = Math.max(highestMax, num);
//         lowestMin = Math.min(lowestMin, num);
//     }
//     return highestProductOfThree;
// }

// O(n log n)
// function maxProductOfThreeNumbers(nums) {
//     const nLen = nums.length;
//     nums.sort((a, b) => a - b);
//     return Math.max(nums[nLen - 1] * nums[nLen - 2] * nums[nLen - 3], nums[0] * nums[1] * nums[nLen - 1]);
// }

function maxProductOfThreeNumbers(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;
    for (let num of nums) {
        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num >= max2) {
            max3 = max2;
            max2 = num;
        } else if (num >= max3) {
            max3 = num;
        }
        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num <= min2) {
            min2 = num;
        }
    }
    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

console.log(maxProductOfThreeNumbers([-1, 9, 22, 3, -15, -7])); // 2310
