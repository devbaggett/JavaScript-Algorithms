// bubbleSort

// Example input
const a1 = [5, 4, 2, 1, 3]; // [1, 2, 3, 4, 5]
const a2 = [37, 45, 29, 8, 12, 88, -3]; // [-3, 8, 12, 29, 37, 45, 88]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

console.log(bubbleSort(a1));
console.log(bubbleSort(a2));
