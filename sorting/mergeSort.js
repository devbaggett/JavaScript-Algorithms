// mergeSort

// Example input
const a1 = [1, 10, 50, 2, 14, 99, 100]; // [1, 2, 10, 14, 50, 99, 100]

// Helper function
function merge(arr1, arr2) {
    const newArr = [];

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort(a1));
