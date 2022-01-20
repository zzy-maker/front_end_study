/*
  描述
  判断输入是否是正确的邮箱格式
  输入描述：
  邮箱字符串
  输出描述：
  true表示格式正确
*/

function isAvailableEmail(sEmail) {
  // 方法1
  let reg = /^[0-9a-zA-Z_.]{1,}@[a-zA-Z0-9_.]{1,}[a-zA-Z0-9]{2,4}$/;
  // 方法2
  /*
  1、^\w + ： ^ 代表以后面的开头
              \w代表数字+字母+下划线
              + 代表匹配前面的表达式一次或多次

  2、[ \da-z\.-]+ : [ ] 代表中括号表达式的开始
                    \d 代表[0-9]的数字，取其一
                    a-z 代表小写字母，取其一
                    \.  代表匹配 .
                    -  代表匹配 –
  3、([a-z]+|[\u4E00-\u9FFF ]+)$：（）代表子表达的开始
                                  |  代表任选其一
                                  \u  代表Unicode编码
                                  4E00-9FFF为中文字符编码区
                                  $  代表以前面的表达式结束
  */
  // let reg = /^\w+@[\da-z\.-]+\.([a-z]+|[\u4E00-\u9FFF]+)$/

  return reg.test(sEmail);
}
console.log(isAvailableEmail("1563451595@qq.com"));
