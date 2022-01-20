/*
  描述
  请补全JavaScript代码，要求以boolean的形式返回两个Set对象参数是否一样，是则返回true，否则返回false。
*/

const _isSameSet = (s1, s2) => {
  // 补全代码
  if (s1.size !== s2.size) {
    return fasle
  }
  return [...s1].every(i => s2.has(i))
}
const obj1 = {
  name: 'zzy',
  age: 22
}
const obj2 = {
  name: 'zzy',
  age: 22
}
const s1 = new Set()
const s2 = new Set()
s1.add(obj1)
s2.add(obj1)
console.log(_isSameSet(s1, s2));