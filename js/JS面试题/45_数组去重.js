/*
  描述
  为 Array 对象添加一个去除重复项的方法
  示例1
  输入：
  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
  复制
  输出：
  [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
*/

Array.prototype.uniq = function () {
  // 方法1
  return Array.from(new Set(this));
  // 方法2
  // let result = this.reduce((pre, cur) => {
  //   if (pre.includes(cur)) {
  //     return pre;
  //   } else {
  //     return pre.concat(cur);
  //   }
  // }, []);
  // return result;
};

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, "a", "a", NaN];
console.log(arr.uniq());
