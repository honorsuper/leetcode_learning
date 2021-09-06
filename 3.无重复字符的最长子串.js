/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let m = new Map();
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (m.has(item) && m.get(item) >= l) {
      l = m.get(item) + 1;
    }
    res = Math.max(res, i - l + 1);
    m.set(item, i);
  }

  return res;
};
// @lc code=end
