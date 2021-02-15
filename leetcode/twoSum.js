// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
// target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// naive O(n^2)
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let next = target - nums[i];
//         for (let j = 1 + i; j < nums.length; j++) {
//             if (nums[j] === next) {
//                 return [i, j];
//             }
//         }
//     }
// }

// O(n)
// function twoSum(nums, target) {
//     const complementsMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (complementsMap[nums[i]] >= 0) {
//             return [complementsMap[nums[i]], i];
//         }
//         complementsMap[target - nums[i]] = i;
//     }
// }

// O(n)
// function twoSum(nums, target) {
//     let map = new Map();
//     for(let i = 0; i < nums.length; i ++) {
//         if(map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i];
//         } else {
//             map.set(nums[i], i);
//         }
//     }
//     return [];
// }

// O(n) - fastest
function twoSum(nums, target) {
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (comp in numsMap) {
            return [numsMap[comp], i];
        } else {
            numsMap[nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([1, 3, 4, 2], 6)); // [2, 3]
