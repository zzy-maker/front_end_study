/*
  描述
  请补全JavaScript代码，要求找到参数数组中出现频次最高的数据类型，并且计算出出现的次数，要求以数组的形式返回。
  注意：
  1. 基本数据类型之外的任何引用数据类型皆为"object"
  2. 当多种数据类型出现频次相同时将结果拼接在返回数组中，出现次数必须在数组的最后
  示例1
  输入：
  _findMostType([0,0,'',''])
  复制
  输出：
  ['number','string',2]或['string','number',2]
*/
const _findMostType = (array) => {
  // 补全代码
  let arr = [];
  let num = 0;
  let tem = {};
  array.forEach((e) => {
    let type = typeof(e)
    if (!tem[type]) {
      tem[type] = 1
    } else {
      tem[type] ++
    }
    if (tem[type] > num) {
      num = tem[type]
    }
  })
  for(key in tem) {
    if (tem[key] === num) {
      arr.push(key)
    }
  }
  arr.push(num)
  return arr
};

console.log(_findMostType([0, 0, "", ""]));
// _findMostType([0,0,'','',{}])
