/*
  描述
  统计数组 arr 中值等于 item 的元素出现的次数
  示例1
  输入：
  [1, 2, 4, 4, 3, 4, 3], 4
  复制
  输出：
  3
*/

function count(arr, item) {
  // 方法1
  // let count = 0;
  // arr.forEach((i) => {
  //   if (i === item) {
  //     count++;
  //   }
  // });
  // return count;
  // 方法2
  return arr.filter((p) => p === item).length;
}

console.log(count([1, 2, 4, 4, 3, 4, 3], 4));
