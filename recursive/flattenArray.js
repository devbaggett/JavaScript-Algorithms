// flattenArray
// Flatten a deeply nested array of arrays and/or objects using recursion.

let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9, [5, 6]]];
let data2 = [1, 3, [4, 5]];
let data3 = [1, true, [3, 4], "abc", {foo: "bar"}, [5, [6, 7]], 8];

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
function flattenArray(arr1, arr2) {
    arr2 = arr2 || [];
    arr1.forEach(item => {
        Array.isArray(item) ? flattenArray(item, arr2) : arr2.push(item);
    });
    return arr2;
}

console.log(flattenArray(data3));

