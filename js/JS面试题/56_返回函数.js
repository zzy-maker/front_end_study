/*
  描述
  实现函数 functionFunction，调用之后满足如下条件：
  1、返回值为一个函数 f
  2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
  3、所有函数的参数数量为 1，且均为 String 类型
  示例1
  输入：
  functionFunction('Hello')('world')
  复制
  输出：
  Hello, world
*/

function functionFunction(str) {
  var args = Array.prototype.slice.call(arguments, 0);
  var f = function () {
    var args_f = Array.prototype.slice.call(arguments, 0);
    args_f = args.concat(args_f);
    return functionFunction.apply(this, args_f);
  };
  f.valueOf = function () {
    return args.join(", ");
  };
  f.toString = function () {
    return args.join(", ");
  };
  return f;
}
console.log(functionFunction("Hello")("world")('sss').toString());
