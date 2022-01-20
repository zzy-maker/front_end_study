/*
  描述
  请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。

  输入：
  _comma(12300)
  输出：
  '12,300'
*/

// 方法一
function _comma(number) {
  if (typeof number !== 'number') {
    throw TypeError('Expect a Number')
  }
  number = number.toString()
  let isPositive = number > 0 ? true : false;
  if (!isPositive) number = number.replace("-", "");
  let count = 0
  let str = ''
  for (let i = number.length - 1; i >= 0; i--) {
    count++
    str += number[i]
    if (count % 3 === 0 && i !== 0) {
      str += ","
    }
  }
  let result = ''
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  console.log(result);
}

_comma(12300);

// 方法二
function _comma2(number) {
  number = number.toString()
  let result = number.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  console.log(result);
}
_comma2(10333)