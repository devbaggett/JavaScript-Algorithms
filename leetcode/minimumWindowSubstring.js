// 76. Minimum Window Substring

// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no
// such window in s that covers all characters in t, return the empty string "".

// Note that if there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// const minWindow = (s, t) => {
//     let min = Number.MAX_VALUE;
//     const charMap = {};
//     let charCount = t.length;
//     let minStartIndex = 0;
//     for (let char of t) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1;
//     }
//     let [left, right] = [0, 0];
//     while (right < s.length) {
//         if (charMap[s[right]] > 0) charCount--;
//         charMap[s[right]]--;
//         right++;
//         while (charCount === 0) {
//             if ((right - left) < min) {
//                 min = right - left;
//                 minStartIndex = left;
//             }
//             charMap[s[left]]++;
//             if (charMap[s[left]] > 0) {
//                 charCount++;
//             }
//             left++;
//         }
//     }
//     return min === Number.MAX_VALUE ? "" : s.substr(minStartIndex, min);
// };

const minWindow = (s, t) => {
    if (t.length < 1) return "";
    let result = [-1, -1];
    let minLength = Infinity;
    const charMapT = {};
    const window = {};
    for (let char of t) {
        charMapT[char] ? charMapT[char]++ : charMapT[char] = 1;
    }
    let [have, need] = [0, Object.keys(charMapT).length];
    let [left, right] = [0, 0];
    while (right < s.length) {
        let char = s[right];
        window[char] ? window[char]++ : window[char] = 1;
        if (char in charMapT && window[char] === charMapT[char]) {
            have++;
        }
        while (have === need) {
            if ((right - left + 1) < minLength) {
                result = [left, right];
                minLength = right - left + 1;
            }
            window[s[left]]--;
            if (s[left] in charMapT && window[s[left]] < charMapT[s[left]]) {
                have--;
            }
            left++;
        }
        right++;
    }
    let [l, r] = result;
    let sub = s.slice(l, r + 1);
    return minLength !== Infinity ? sub : "";
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
