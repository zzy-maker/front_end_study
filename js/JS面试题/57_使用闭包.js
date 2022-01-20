/*
  描述
  实现函数 makeClosures，调用之后满足如下条件：
  1、返回一个函数数组 result，长度与 arr 相同
  2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
  示例1
  输入：
  [1, 2, 3], function (x) {
    return x * x;
  }
  复制
  输出：
  4
*/

function makeClosures(arr, fn) {
  var funcs = []; //因为返回的是数组函数
  for (var i = 0; i < arr.length; i++) {
    (function (i) {
      //立即函数可以执行给函数赋值的任务。
      funcs[i] = function () {
        //给每个函数赋值函数
        return fn(arr[i]); //赋值函数的内容
      };
    })(i);
  }
  return funcs;
}
makeClosures([1, 2, 3], function (x) {
  return x * x;
});
