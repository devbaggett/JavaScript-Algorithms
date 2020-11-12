// flatten

// Write a recursive function which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr, result = []) {
    for (let i in arr) {
        if (typeof arr[i] === 'object') {
            flatten(arr[i], result)
        }
        else result.push(arr[i])
    }
    return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
