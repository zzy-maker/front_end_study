/*
  描述
  请补全JavaScript代码，要求在页面上渲染出一个直角三角形，三角形换行要求使用"br"实现。三角形如下：
  -
  --
  ---
*/
// 方法一
let star = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

// 方法二
let star2 = "*" + "\n" + "**" + "\n" + "***";
console.log(star2);
