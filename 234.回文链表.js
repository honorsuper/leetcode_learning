/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const len = list.length;
  if (len < 2) return true;
  let status = true;
  for (let i = 0; i < len; i++) {
    if (list[i] !== list[len - 1 - i]) {
      status = false;
      break;
    }
  }
  return status;
};
// @lc code=end
