const {performance} = require('perf_hooks');

// function maxSubarraySum(arr, n) {
//     if (arr.length === 0) {
//         return null;
//     }
//     let maxSum = 0;
//     let temp = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let slice = arr.slice(i, i + n);
//         slice.forEach((num) => {
//             temp += num;
//             if (temp > maxSum) {
//                 maxSum = temp;
//             }
//         });
//         temp = 0;
//     }
//     return maxSum;
// }

// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

// Sliding Window Pattern
// function maxSubarraySum(arr, num) {
//     let max = 0;
//     let temp;
//     if (arr.length < num) {
//         return null;
//     }
//     for (let i = 0; i < num; i++) {
//         max += arr[i];
//     }
//     temp = max;
//     for (let i = num; i < arr.length; i++) {
//         temp = temp - arr[i - num] + arr[i];
//         max = Math.max(max, temp);
//     }
//     return max;
// }

// Sliding window pattern
function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    let temp = max;
    let i = 0;
    for (let j = num; j < arr.length; j++) {
        temp = temp - arr[i] + arr[j];
        max = Math.max(max, temp);
        i++;
    }
    return max;
}


let t0 = performance.now();
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
let t1 = performance.now();
console.log("Algorithm took " + (t1 - t0) + " milliseconds.");
