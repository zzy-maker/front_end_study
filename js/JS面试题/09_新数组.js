/*
  描述
  请补全JavaScript代码，该函数接受两个参数分别为数组、索引值，要求在不改变原数组的情况下返回删除了索引项的新数组。
*/

// splice会改变原数组，返回的是删除掉的元素

const _delete = (array,index) => {
  // 补全代码
  // splice会改变原数组，可以先深拷贝一份
  // 1.concat方法
  // let newArr = array.concat()
  // 2.JSON方法
  let newArr = JSON.parse(JSON.stringify(array))
  newArr.splice(index, 1)
  return newArr
}

console.log(_delete([1,2,3,4], 2));