// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all
// the original letters exactly once.

// const groupAnagrams = strs => {
//     const group = {};
//     for (let str of strs) {
//         const sorted = str.split('').sort().join('');
//         group[sorted] ? group[sorted].push(str) : group[sorted] = [str];
//     }
//     return Object.values(group);
// };

// faster
const groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        map.has(sorted) ? map.set(sorted, [...map.get(sorted), str]) : map.set(sorted, [str]);
    })
    return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
