// isValidHill

// Determine if an array of integers is a valid hill, containing one peak

const isValidHill = arr => {
    let [left, right] = [0, arr.length - 1];
    while (arr[left] < arr[left + 1]) {
        left++;
    }
    while (arr[right] < arr[right - 1]) {
        right--;
    }
    return left === right;
};

console.log(isValidHill([])); // false
console.log(isValidHill([1, 2, 1])); // true
console.log(isValidHill([1, 3, 2, 1])); // true
console.log(isValidHill([1, 2, 3, 2, 1])); // true
console.log(isValidHill([1, 2, 3, 2, 3, 1])); // false
