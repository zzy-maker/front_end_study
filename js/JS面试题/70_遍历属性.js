/*
  输入：
  var C = function() {this.foo = 'bar'; this.baz = 'bim';};
  C.prototype.bop = 'bip';
  iterate(new C());
  复制
  输出：
  ["foo: bar", "baz: bim"]
*/

function iterate(obj) {
  let arr = []
  // 方法1
  Object.getOwnPropertyNames(obj).forEach(key => {
    arr.push(key + ": " + obj[key])
  })
  // 方法2
  Object.keys(obj).forEach(key => {
    arr.push(key + ": " + obj[key])
  })
  return arr
}

var C = function () {
  this.foo = "bar";
  this.baz = "bim";
};
C.prototype.bop = "bip";
iterate(new C());
