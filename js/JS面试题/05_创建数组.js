/*
  描述
  请补全JavaScript代码，要求返回一个长度为参数值并且每一项值都为参数值的数组。
  注意：
  1. 请勿直接使用for/while
*/

// 方法一
const _createArray = (number) => {
  // 补全代码
  return Array(number).fill(number)

}
console.log(_createArray(8));

// 方法二
const _createArray2 = (number) => {
  // 补全代码
  arr = Array.from({length: number}, () => number)
  console.log(arr);
}
_createArray2(10)
