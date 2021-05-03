const arr1 = [1, 1, 1, 1, 1, 2]; // 2
const arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
const arr3 = []; // 0
const arr4 = [-2, -1, -1, 0, 1]; // 4

// function countUniqueValues(sortedArray) {
//     const dict = {};
//     for (let key of sortedArray) {
//         dict[key] = dict[key]++ || key;
//     }
//     return Object.keys(dict).length;
// }

// function countUniqueValues(sortedArray) {
//     if (sortedArray.length === 0) {
//         return 0;
//     }
//     let i = 0;
//     for (let j = 1; j < sortedArray.length; j++) {
//         if (sortedArray[i] !== sortedArray[j]) {
//             i++;
//             sortedArray[i] = sortedArray[j];
//         }
//     }
//     return i + 1;
// }

function countUniqueValues(sortedArray) {
    const unique = new Set(sortedArray);
    return unique.size
}

console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues(arr3));
console.log(countUniqueValues(arr4));
