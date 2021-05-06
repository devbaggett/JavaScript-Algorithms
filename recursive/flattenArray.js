// flattenArray
// Flatten a deeply nested array of arrays and/or objects using recursion.

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9, [5, 6]]];
const data2 = [1, 3, [4, 5]];
const data3 = [1, true, [3, 4], "abc", {foo: "bar"}, [5, [6, 7]], 8];

// Solution #1
// function flattenArray(arr) {
//     let result = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result = result.concat(flattenArray(item));
//         } else {
//             result.push(item);
//         }
//     });
//     return result;
// }

// Solution #2
function flattenArray(arr, result) {
    result = result || [];
    arr.forEach(item => {
        Array.isArray(item) ? flattenArray(item, result) : result.push(item);
    });
    return result;
}

console.log(flattenArray(data3));
