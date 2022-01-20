/*
  描述
  给定二进制字符串，将其换算成对应的十进制数字
  示例1
  输入：
  '11000000'
  复制
  输出：
  192
*/

function base10(str) {
  // 方法1
  let sum = 0;
  for (let i in str) {
    if (str[i] == 1) {
      sum += Math.pow(2, str.length - 1 - i);
    }
  }
  return sum;
  // 方法2
  return Number("0b" + str);
  // 方法3
  // parseInt方法可以将其它进制转换为十进制，只需要给该方法传入需要转换的字符串和该字符串的进制表示两个参数即可。
  /**
        其它进制转十进制
        parseInt(str,2)
        parseInt(str,8)
        parseInt(str,16)
    */
  return parseInt(str, 2);
}

base10("11000000");
