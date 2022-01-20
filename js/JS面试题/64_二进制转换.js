/*
  描述
  获取数字 num 二进制形式第 bit 位的值。注意：
  1、bit 从 1 开始
  2、返回 0 或 1
  3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
  示例1
  输入：
  128, 8
  复制
  输出：
  1
*/

function valueAtBit(num, bit) {
  // 方法1
  //toString转化为二进制，split将二进制转化为数组，reverse()将数组颠倒顺序
  let arr = num.toString(2).split("").reverse();
  console.log(arr);
  return arr[bit - 1];

  // 方法2
  // 利用下标就能将对应值取出来。题目返回的数字是从右往左，因此下标为倒数。
  // 从右向左。下标如果从1开始，为s.length - bit。如果从0开始，为s.length - bit-1
  var s = num.toString(2);
  return s[s.length - bit];

  // 方法3
  // 如 1000 0000 第八位是1，要想将他移到第一位上，移动的就是bit-1位，之后让它和1与，这样就能将除了第一位之外的其他位上的数字置0，输出的就只有第一位上的数字
  return (num >> (bit -1)) & 1;
}

valueAtBit(128, 8);
