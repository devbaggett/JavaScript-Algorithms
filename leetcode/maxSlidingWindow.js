// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of
// the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right
// by one position.

// Return the max sliding window.

// naive O(n^2)
// function maxSlidingWindow(nums, k) {
//     let max = [];
//     for (let i = 0; i <= nums.length - k; i++) {
//         let window = nums.slice(i, i + k);
//         max.push(Math.max(...window));
//     }
//     return max;
// }

// O(n)
function maxSlidingWindow(nums, k) {
    let max = [];
    let q = [];
    for (let end = 0, start = 1 - k; end < nums.length; end++, start++) {
        while (q.length && nums[end] > q[q.length - 1]) {
            q.pop();
        }
        q.push(nums[end]);
        if (start < 0) {
            continue;
        }
        max.push(q[0]);
        if (nums[start] === q[0]) {
            q.shift();
        }
    }
    return max;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [ 3, 3, 5, 5, 6, 7 ]
