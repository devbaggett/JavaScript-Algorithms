// 15. 3Sum

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
// triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// const threeSum = nums => {
//     const res = [];
//     nums.sort((a, b) => a - b);
//     for (let [i, number] of nums.entries()) {
//         if (i > 0 && number === nums[i - 1]) continue;
//         let [left, right] = [i + 1, nums.length - 1];
//         while (left < right) {
//             let sum = number + nums[left] + nums[right];
//             if (sum > 0) right--;
//             else if (sum < 0) left++;
//             else {
//                 res.push([number, nums[left], nums[right]]);
//                 left++;
//                 while (nums[left] === nums[left - 1] && left < right) {
//                     left++;
//                 }
//             }
//         }
//     }
//     return res;
// };

// var threeSum = function(nums) {
//     const result = [];
//     nums.sort((a, b) => a - b);
//     let left = 0;
//     let right = nums.length - 1;
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         left = i + 1;
//         right = nums.length - 1;
//         let sum = 0;
//         while (left < right) {
//             sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 right--;
//                 while (left < right && nums[left] === nums[left - 1]) left++;
//                 while (left < right && nums[right] === nums[right + 1]) right--;
//             } else if (sum > 0) {
//                 right--;
//             } else {
//                 left++
//             }
//         }
//     }
//     return result;
// };

// slowest, easiest to understand (imo)
const threeSum = nums => {
    const result = [];
    const set = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let [left, right] = [i + 1, nums.length - 1];
        while (left < right) {
            let [a, b, c] = [nums[i], nums[left], nums[right]];
            let sum = a + b + c;
            if (sum === 0) {
                if (!set.has(`${a}, ${b}, ${c}`)) {
                    set.add(`${a}, ${b}, ${c}`);
                    result.push([a, b, c]);
                }
                left++;
                right--;
            } else if (sum > 0) right--;
            else left++;
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
