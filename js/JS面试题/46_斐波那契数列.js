/*
  描述
  用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
*/

function fibonacci(n) {
  // 方法一递归
  return n <= 2 ?  1 : fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(3));
