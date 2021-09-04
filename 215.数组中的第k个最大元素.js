/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

class MiniHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //上移
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  //下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  //插入
  insert(value) {
    this.heap.push(value);
    //上移
    this.shiftUp(this.heap.length - 1);
  }

  //删除顶部元素
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  //获取堆顶头部
  peak() {
    return this.heap[0];
  }

  //获取数组的长度
  size() {
    return this.heap.length;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = new MiniHeap();
  nums.forEach((item) => {
    heap.insert(item);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.peak();
};
// @lc code=end
