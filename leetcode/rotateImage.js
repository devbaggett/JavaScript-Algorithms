// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// const rotate = matrix => {
//     let depth = 0;
//     const maxDepth = Math.floor(matrix.length / 2);
//     while (depth < maxDepth) {
//         const length = matrix.length - 1 - depth * 2;
//         const left = depth;
//         const top = depth;
//         for (let i = 0; i < length; i++) {
//             let first = matrix[top][left + i];
//             let next = matrix[top + i][left + length];
//             matrix[top + i][left + length] = first;
//             first = next;
//             next = matrix[top + length][left + length - i];
//             matrix[top + length][left + length - i] = first;
//             first = next;
//             next = matrix[top + length - i][left];
//             matrix[top + length - i][left] = first;
//             matrix[top][left + i] = next;
//         }
//         depth++;
//     }
// };

const rotate = matrix => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
    return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1], [8,5,2], [9,6,3]]
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
// [[15,13,2,5], [14,3,4,1], [12,6,8,9], [16,7,10,11]]
console.log(rotate([[1]])); // [[1]]
console.log(rotate([[1, 2], [3, 4]])); // [3,1], [4,2]
