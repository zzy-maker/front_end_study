/*
  描述
  实现函数 partialUsingArguments，调用之后满足如下条件：
  1、返回一个函数 result
  2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
  3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
  示例1
  输入：
  无
  复制
  输出：
  无
*/
function partialUsingArguments(fn) {
  // 方法1
  let args = [].slice.call(arguments, 1);
  args.unshift(null);
  return fn.bind.apply(fn, args);
  // 方法2
  //先获取p函数第一个参数之后的全部参数
  // let args = Array.prototype.slice.call(arguments, 1);
  //声明result函数
  // var result = function () {
  //使用concat合并两个或多个数组中的元素
  //   return fn.apply(null, args.concat([].slice.call(arguments)));
  // };
  // return result;
}

partialUsingArguments();
