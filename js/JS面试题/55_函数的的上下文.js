/*
  描述
  将函数 fn 的执行上下文改为 obj 对象
  示例1
  输入：
  function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}
  复制
  输出：
  Hello, Rebecca!!!
*/

function speak(fn, obj) {
  // 方法1
  // obj.fn = fn
  // return obj.fn()
  // 方法2
  return fn.apply(obj)
  // 方法3
  // return fn.call(obj)
  // 方法4
  // return fn.bind(obj)
}
speak(
  function () {
    return this.greeting + ", " + this.name + "!!!";
  },
  { greeting: "Hello", name: "Rebecca" }
);
