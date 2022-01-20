/*
  描述
  请补全JavaScript代码，要求以boolean的形式返回参数字符串是否为回文字符串。
*/
const _isPalindrome = (string) => {
  // 补全代码
  // 方法1 reverse()
  // let str = string.split("");
  // let reStr = string.split("").reverse();
  // if (JSON.stringify(str) === JSON.stringify(reStr)) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 方法2 双指针
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(_isPalindrome("abcdcba"));
