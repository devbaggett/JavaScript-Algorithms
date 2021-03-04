// 1165. Single-Row Keyboard

// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your
// finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The
// time taken to move your finger from index i to index j is |i - j|.

// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

const calculateTime = (keyboard, word) => {
    if (word.length < 1) return 0;
    const keyMap = {};
    keyboard.split("").map((key, idx) => keyMap[key] = idx);
    let count = keyMap[word[0]];
    if (word.length === 1) return count;
    let i = 1;
    while (i < word.length) {
        let a = keyMap[word[i - 1]];
        let b = keyMap[word[i]];
        let distance = Math.abs(a - b);
        count += distance;
        i++;
    }
    return count;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")); // 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4.

console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")); // 73
