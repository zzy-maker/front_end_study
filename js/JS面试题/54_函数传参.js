/*
  描述
  将数组 arr 中的元素作为调用函数 fn 的参数
  示例1
  输入：
  function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']
  复制
  输出：
  Hello, Ellie!
*/

function argsAsArray(fn, arr) {
  // return fn.apply(this, arr)
  return fn.call(this, ...arr)
}
argsAsArray(
  function (greeting, name, punctuation) {
    return greeting + ", " + name + (punctuation || "!");
  },
  ["Hello", "Ellie", "!"]
);
