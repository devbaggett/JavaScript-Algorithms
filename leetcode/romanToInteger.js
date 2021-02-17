// 13. Roman to Integer

// Given a Roman numeral, convert it to an integer

// const romanToInt = str => {
//     const map = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
//     let num = 0;
//     for (let i = 0; i < str.length; i++) {
//         let [current, next] = [map[str[i]], map[str[i + 1]]];
//         current < next ? num -= current : num += current;
//     }
//     return num;
// }

// reduce
const romanToInt = str => {
    const map = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    return [...str].reduce((result, val, i) => {
        let [current, next] = [map[val], map[str[i + 1]]];
        current < next ? result -= current : result += current;
        return result;
    }, 0);
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
