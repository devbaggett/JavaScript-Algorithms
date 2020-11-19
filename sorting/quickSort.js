// quickSort

const a1 = [4, 8, 2, 1, 5, 7, 6, 3]; // [1, 2, 3, 4, 5, 6, 7, 8]

// swap helper
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

// pivot helper
function pivot(arr, start = 0, end = arr.length - 1) {
    let swapIndex = start;

    let pivot = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);

    return swapIndex;
}

// main function
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort(a1));
