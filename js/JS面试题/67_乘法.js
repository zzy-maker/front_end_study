/*
  描述
  求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
  示例1
  输入：
  3, 0.0001
  复制
  输出：
  0.0003
*/

function multiply(a, b) {
  let newA = [];
  let newB = [];
  if (".".indexOf(a)) {
    al = a.toString().split(".")[1];
    if (al && al.length) {
      newA = al.length;
    } else {
      newA = 0;
    }
  }
  if (".".indexOf(b)) {
    bl = b.toString().split(".")[1];
    if (bl && bl.length) {
      newB = bl.length;
    } else {
      newB = 0;
    }
  }
  return (a * b).toFixed(newA + newB);
}

// multiply(3, 0.0001)
console.log(multiply(3.02, 0.000001));
