// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines
// are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with
// the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// brute force - O(n^2)
// const maxArea = height => {
//     let max = 0;
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
//         }
//     }
//     return max;
// };

// two pointers - O(n)
const maxArea = height => {
    let max = 0;
    let [left, right] = [0, height.length - 1];
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, area);
        height[left] < height[right] ? left++ : right--;
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
