// 16. 3Sum Closest

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to
// target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

const threeSumClosest = function (nums, target) {
    let result = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let [left, right] = [i + 1, nums.length - 1];
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) return sum;
            if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
            if (sum > target) right--;
            else left++;
        }
    }
    return result;
};


console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
