/*
  描述
  封装函数 f，使 f 的 this 指向指定的对象
  示例1
  输入：
  无
  复制
  输出：
  无
*/

function bindThis(f, oTarget) {
  // 方法1
  return function () {
    return f.call(oTarget, ...arguments)
  };
  // 方法2
  // return function () {
  //   return f.apply(oTarget, arguments);
  // };
  // 方法3
  // return f.bind(oTarget)
}
let name = "zzy";
function foo() {
  console.log(this.name);
}
obj = {
  name: "zzy",
};
foo()
bindThis(foo, obj)();
