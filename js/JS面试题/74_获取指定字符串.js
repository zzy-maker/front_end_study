/*
  描述
  给定字符串 str，检查其是否包含 连续3个数字，请使用正则表达式实现。
  1、如果包含，返回最先出现的 3 个数字的字符串
  2、如果不包含，返回 false

  示例1
  输入：
  '9876543'
  复制
  输出：
  987
*/

function captureThreeNumbers(str) {
  let arr = str.match(/\d{3}/)
  // 方法1
  return (arr && arr[0] || false)
  // 方法2
  return !!arr && arr
}

captureThreeNumbers('9876543')