/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (m.has(target - item)) {
      return [m.get(target - item), i];
    } else {
      m.set(item, i);
    }
  }
};
// @lc code=end
