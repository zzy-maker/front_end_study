/*
  描述
  将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
  示例1
  输入：
  alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
  复制
  输出：
  Yo, Rebecca!
*/

function alterContext(fn, obj) {
  // 方法1
  return fn.call(obj)
  // 方法2
  return fn.apply(obj)
  // 方法3
  return fn.bind(obj)()
  // 方法4
  obj.fn = fn;
  return obj.fn();
}

alterContext(
  function () {
    return this.greeting + ", " + this.name + "!";
  },
  { name: "Rebecca", greeting: "Yo" }
);
