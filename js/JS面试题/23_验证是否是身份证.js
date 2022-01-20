/*
  描述
  请补全JavaScript代码，要求以Boolean的形式返回字符串参数是否符合身份证标准。
  注意：
  1. 无需考虑地区信息、出生日期、顺序码与校验码的验证
  示例1
  输入：
  _isCard('21062319980907888X')
  复制
  输出：
  true
*/

const _isCard = (number) => {
  // 补全代码
  let reg = /^\d{17}(\d|X|x){1}$/
  return reg.test(number)
};
console.log(_isCard("78882106231998090X"));
