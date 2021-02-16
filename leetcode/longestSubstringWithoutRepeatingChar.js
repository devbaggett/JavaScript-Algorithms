// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    if (s.length < 1) {
        return 0;
    }
    let count = 0;
    let set = new Set();
    let start = 0;
    let end = 0;
    while (start < s.length && end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            count = Math.max(count, end - start);
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return count;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1