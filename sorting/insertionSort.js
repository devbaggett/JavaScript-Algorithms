// insertionSort

// Example input
const a1 = [5, 4, 2, 1, 3]; // [1, 2, 3, 4, 5]
const a2 = [37, 45, 29, 8, 12, 88, -3]; // [-3, 8, 12, 29, 37, 45, 88]
const a3 = [8, 1, 2, 3, 4, 5, 6, 7]; // [1, 2, 3, 4, 5, 6, 7, 8]
const a4 = [0, 1, 34, 22, 10, 19, 17]; // [0, 1, 10, 17, 19, 22, 34]
const a5 = [2, 1, 9, 76, 4]; // [1, 2, 4, 9, 76]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
        }
    }
    return arr;
}

console.log(insertionSort(a1));
console.log(insertionSort(a2));
console.log(insertionSort(a3));
console.log(insertionSort(a4));
console.log(insertionSort(a5));
