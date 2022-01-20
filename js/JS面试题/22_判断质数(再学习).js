/*
  描述
  请补全JavaScript代码，要求在Number对象的原型对象上添加"_isPrime"函数，该函数判断调用的对象是否为一个质数，是则返回true，否则返回false。
*/

Number.prototype._isPrime =  function() {
  let number = this.valueOf()
  if (number < 2) return false;
  for (let i = 2; i <= number; i++) {
    if (i === number) {
      return true
    }
    if (number % i === 0) {
      return false;
    }
  }
};
console.log(Number.prototype._isPrime(3));
