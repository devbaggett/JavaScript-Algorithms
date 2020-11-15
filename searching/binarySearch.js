// binarySearch

// Write a function which accepts a SORTED array and a value and returns the index at which the value exists. Otherwise,
// return false.

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let guess = arr[mid];

        if (guess === target) return mid;
        else if (guess < target) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}

console.log(binarySearch(sortedArr, 6));
