/*
  描述
  请补全JavaScript代码，要求每次调用函数"closure"时会返回一个新计数器。每当调用某个计数器时会返回一个数字且该数字会累加1。
  注意：
  1. 初次调用返回值为1
  2. 每个计数器所统计的数字是独立的
*/

const closure = () => {
  // 补全代码
  let count = 1;
  function counter() {
    count++;
    return count;
  }
  return counter;
};
let a = closure();
let resa = a();
console.log(resa);

let b = closure();
let resb = b();
console.log(resb);
