// capitalizeFirst

// Write a recursive function that takes an array of strings, and capitalizes the first letter of each string in the
// array.

function capitalizeFirst(arr, newArr = []) {
    if (arr.length === 0) {
        return newArr;
    }
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return capitalizeFirst(arr.slice(1), newArr);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
