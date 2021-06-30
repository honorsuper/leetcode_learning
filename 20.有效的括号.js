/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current === "(" || current === "{" || current === "[") {
      result.push(current);
    } else {
      const temp = result[result.length - 1];
      if (
        (current === ")" && temp === "(") ||
        (current === "}" && temp === "{") ||
        (current === "]" && temp === "[")
      ) {
        //出栈
        result.pop();
      } else {
        return false;
      }
    }
  }
  return result.length === 0;
};
// @lc code=end
