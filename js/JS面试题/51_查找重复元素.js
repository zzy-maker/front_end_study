/*
  描述
  找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
  示例1
  输入：
  [1, 2, 4, 4, 3, 3, 1, 5, 3]
  复制
  输出：
  [1, 3, 4]
*/

function duplicates(arr) {
  let newArr = [];
  arr.forEach((i) => {
    if (arr.indexOf(i) !== arr.lastIndexOf(i) && newArr.indexOf(i) === -1) {
      console.log(i);
      newArr.push(i)
    }
  });
  return newArr;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);
