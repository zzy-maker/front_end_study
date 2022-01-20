/*
  描述
  请补全JavaScript代码，请给参数对象添加拦截代理功能，并返回这个代理，要求每当通过代理调用该对象拥有的属性时，"count"值加1，否则减1。
*/

let count = 0;
const _proxy = (object) => {
  // 补全代码
  let proxy = new Proxy(object, {
    // 方法1
    // get: function (target, propKey) {
    //   if (propKey in target) {
    //     count++
    //   } else {
    //     count--
    //   }
    // }

    // 方法2
    get: function (target, propKey) {
      if (Reflect.has(target, propKey)) {
        count++
      } else {
        count--
      }
    }
    
  })
  return proxy
};

const obj = {
  name: 'zzy',
  age: 22
}
_proxy(obj).age
_proxy(obj).name
_proxy(obj).name
console.log(count);