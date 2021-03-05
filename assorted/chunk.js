// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// function chunk(arr, size) {
//     const newArr = [];
//     let subArr = [];
//     for (let i = 0; i < arr.length; i = i + size) {
//         for (let j = i; j < size + i; j++) {
//             // check for end of array
//             if (arr[j]) {
//                 subArr.push(arr[j]);
//             }
//         }
//         newArr.push(subArr);
//         subArr = [];
//     }
//     console.log(newArr);
//     return newArr;
// }

// function chunk(arr, size) {
//     const chunkedArray = [];
//     for (let element of arr) {
//         const lastElement = chunkedArray[chunkedArray.length - 1];
//         if (!lastElement || lastElement.length === size) {
//             chunkedArray.push([element]);
//         } else {
//             lastElement.push(element);
//         }
//     }
//     console.log(chunkedArray);
//     return chunkedArray;
// }

function chunk(arr, size) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i = i + size) {
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}

module.exports = chunk;
