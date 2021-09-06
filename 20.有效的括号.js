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
  // 如果长度是奇数，直接返回
  if (s.length % 2 !== 0) return false;
  const stack = [];
  const m = new Map();
  m.set("(", ")");
  m.set("{", "}");
  m.set("[", "]");

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (m.has(item)) {
      // 此时为左括号
      stack.push(item);
    } else {
      const t = stack[stack.length - 1];
      if (item === m.get(t)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end
