/*
  描述
  给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
  示例1
  输入：
  'rattler'
  复制
  输出：
  true
*/

function containsRepeatingLetter(str) {
  // \1表示重复正则第一个圆括号内匹配到的内容;
  // \2表示重复正则第二个圆括号内匹配到的内容
  return /([a-zA-Z])\1/.test(str)
}

containsRepeatingLetter('rattler')
