/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;

  let m = new Map();
  let res = "";

  for (let i of t) {
    m.set(i, m.has(i) ? m.get(i) + 1 : 1);
  }
  let typeSize = m.size;

  while (r < s.length) {
    const item = s[r];
    if (m.has(item)) {
      m.set(item, m.get(item) - 1);
      if (m.get(item) === 0) typeSize -= 1;
    }

    while (typeSize === 0) {
      // 已经找到所有的元素，可以开始缩小范围了
      const newRes = s.substring(l, r + 1);
      if (!res || res.length > newRes.length) res = newRes;

      const c2 = s[l];
      if (m.has(c2)) {
        m.set(c2, m.get(c2) + 1);
        if (m.get(c2) === 1) {
          typeSize += 1;
        }
      }
      l += 1;
    }
    r += 1;
  }

  return res;
};
// @lc code=end
