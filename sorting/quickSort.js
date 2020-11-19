// quickSort

const a1 = [4, 8, 2, 1, 5, 7, 6, 3]; // [1, 2, 3, 4, 5, 6, 7, 8]

// Pivot helper
function pivot(arr, start = 0, end = arr.length - 1) {
    let swapIndex = start;

    let pivot = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            let temp = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = temp;
        }
    }
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;

    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort(a1));
