/*
  描述
  给定字符串 str，检查其是否以元音字母结尾
  1、元音字母包括 a，e，i，o，u，以及对应的大写
  2、包含返回 true，否则返回 false
  示例1
  输入：
  'gorilla'
  复制
  输出：
  true
*/
function endsWithVowel(str) {
  // 方法1
  return /[aeiou]$/i.test(str)
  // 方法2
  return str && ("aeiouAEIOU".indexOf(str
    [str.length-1]) > -1);
}
console.log(
  endsWithVowel("gorilla")
);
