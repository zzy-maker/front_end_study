/*
  描述
  给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
  示例1
  输入：
  'abc123'
  复制
  输出：
  true
*/

function containsNumber(str) {
  // 方法1
  for(let i = 0; i < 10; i++) {
    if (str.indexOf(i) !== -1) {
      return true
    }
  }
  return false
  // 方法2
  let reg = /\d/
  return reg.test(str)
  // 方法3
  return !!str.match(/\d/g)
}
// console.log(containsNumber("abc123"));

containsNumber("abc123")