/*
  描述
  请补全JavaScript代码，该函数接受两个参数分别为字符串、子字符串，要求返回子字符串在字符串中出现的频次
*/

const _searchStrIndexOf = (str, target) => {
  // 补全代码
  // 方法一
  // let count = 0
  // let index = str.indexOf(target)
  // while(index > -1) {
  //   index = str.indexOf(target, index + 1)
  //   count++
  // }
  // return count
  // 方法二：字符串分割
  // let arr = str.split(target)
  // return arr.length - 1
  // 方法三：正则
  let arr2 = str.match(new RegExp(target, 'g'))
  return arr2.length
}

console.log(_searchStrIndexOf('aaaabbbccc', 'a'));