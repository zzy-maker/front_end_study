/*
  描述
  将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
  示例1
  输入：
  65
  复制
  输出：
  01000001
*/

function convertToBinary(num) {
  let newNum = num.toString(2);
  if (newNum.length % 8 !== 0) {
    newNum = '0'.repeat(8 -newNum.length % 8) + newNum
  }
  return newNum
}
console.log(convertToBinary(128));
