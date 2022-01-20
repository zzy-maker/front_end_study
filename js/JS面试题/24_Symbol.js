/*
  描述
  请补全JavaScript代码，要求以键/值对的对象形式返回参数数组。要求如下：
  1. 键名的数据类型为Symbol
  2. 键值为当前数组项
  3. Symbol的描述为当前数组项
  4. 返回普通对象
*/

const _symbolKey = array => {
  // 补全代码
  let obj = {}
  array.map((value, index) => {
    index = Symbol(value)
    obj[index] = value
  })
  return obj
}

let arr = [1,2,4,5,6,6]
_symbolKey(arr)