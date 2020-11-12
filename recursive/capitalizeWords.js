// capitalizeWords

// Write a recursive function where given an array of words, returns a new array containing each word capitalized.

let words = ['i', 'am', 'learning', 'recursion'];

function capitalizeWords(arr, newArr = []) {
    if (arr.length === 0) {
        return newArr;
    }
    newArr.push(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1), newArr);
}

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
