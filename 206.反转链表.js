/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let l1 = head;
  let l2 = null;

  while (l1) {
    let temp = l1.next;
    l1.next = l2;
    l2 = l1;
    l1 = temp;
  }
  return l2;
};
// @lc code=end
