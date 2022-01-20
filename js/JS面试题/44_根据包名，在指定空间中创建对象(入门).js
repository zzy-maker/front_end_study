/*
  描述
  根据包名，在指定空间中创建对象
  输入描述：
  namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
  输出描述：
  {a: {test: 1, b: {c: {d: {}}}}}
*/
function namespace(oNamespace, sPackage) {
  var pointer = oNamespace;
  function fn(oNamespace, sPackage) {
    let list = sPackage.split(".");
    if (list[0] === "") {
      return;
    }
    if (oNamespace[list[0]] instanceof Object) {
      namespace(oNamespace[list[0]], list.slice(1).join("."));
    } else {
      oNamespace[list[0]] = {};
      namespace(oNamespace[list[0]], list.slice(1).join("."));
    }
  }
  fn(oNamespace, sPackage);
  return pointer;
}
console.log(namespace({ a: { test: 1, b: 2 } }, "a.b.c.d"));
