/*
  描述
  请补全JavaScript代码，要求将数组参数中的多维数组扩展为一维数组并返回该数组。
  注意：
  1. 数组参数中仅包含数组类型和数字类型
  示例1
  输入：
  [1,[2,[3,[4]]]]
  复制
  输出：
  [1,2,3,4]
*/

const _flatten = (arr) => {
  // 补全代码
  // 方法1: toString
  // return arr.toString().split(',').map(e => Number(e))
  // 方法2: 迭代
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     newArr = newArr.concat(_flatten(arr[i]))
  //     console.log(newArr);
  //   } else {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr
  // 方法3：正则
  return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
};
console.log(_flatten([1, [2, [3, [4]]]]));
