/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class MiniHeap {
  constructor() {
    this.heap = [];
  }

  // 获取父元素节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 得到左节点
  getLeftIndex(i) {
    return 2 * i + 1;
  }

  // 得到右节点
  getRightIndex(i) {
    return 2 * i + 2;
  }

  // 交换
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  // 上移
  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 插入
  insert(val) {
    this.heap.push(val);
    // 上移
    this.shiftUp(this.heap.length - 1);
  }

  // 弹出
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }

  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const res = new ListNode(0);
  let p = res;

  const h = new MiniHeap();

  lists.forEach((l) => {
    if (l) {
      h.insert(l);
    }
  });

  console.log(h.size());

  while (h.size()) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if (n.next) {
      h.insert(n.next);
    }
  }

  return res.next;
};
// @lc code=end
