// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// function singleNumber(nums) {
//     const seen = {};
//     for (let num of nums) {
//         seen[num] = seen[num] + 1 || 1;
//     }
//     return Object.keys(seen).find(key => seen[key] === 1);
// }

// function singleNumber(nums) {
//     let seen = new Set();
//
//     nums.forEach(n => {
//         if (seen.has(n)) {
//             seen.delete(n);
//         } else {
//             seen.add(n);
//         }
//     });
//     console.log(seen.values().value);
//
//     return seen.values().next().value;
// }

// function singleNumber(nums) {
//     for (let i = 1; i !== nums.length; i++)
//         nums[0] ^= nums[i];
//     return nums[0];
// }

function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num);
}

console.log(singleNumber([4, 1, 2, 1, 2])); // 4
