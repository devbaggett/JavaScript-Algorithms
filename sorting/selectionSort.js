// selectionSort

// Example input
const a1 = [5, 4, 2, 1, 3]; // [1, 2, 3, 4, 5]
const a2 = [37, 45, 29, 8, 12, 88, -3]; // [-3, 8, 12, 29, 37, 45, 88]
const a3 = [8, 1, 2, 3, 4, 5, 6, 7]; // [1, 2, 3, 4, 5, 6, 7, 8]
const a4 = [0, 1, 34, 22, 10, 19, 17]; // [0, 1, 10, 17, 19, 22, 34]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(a1));
console.log(selectionSort(a2));
console.log(selectionSort(a3));
console.log(selectionSort(a4));
