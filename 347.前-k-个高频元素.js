/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const m = new Map();
  nums.forEach((item) => {
    m.set(item, m.has(item) ? m.get(item) + 1 : 1);
  });

  const h = new MiniHeap();
  m.forEach((value, key) => {
    h.insert({
      value,
      key,
    });

    if (h.size() > k) {
      h.pop();
    }
  });

  return h.heap.map((item) => item.key);
};

class MiniHeap {
  constructor() {
    this.heap = [];
  }

  //交换方法
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //得到父节点的坐标
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  //上移的操作
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
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
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  //插入
  insert(item) {
    this.heap.push(item);
    // 上移的操作
    this.shiftUp(this.heap.length - 1);
  }

  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  // 获取堆顶的头部
  peak() {
    return this.heap[0];
  }

  // 获取数组的长度
  size() {
    return this.heap.length;
  }
}
// @lc code=end
