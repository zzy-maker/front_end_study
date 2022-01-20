/*
  描述
  如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
  否则如果字符 Unicode 编码 > 255 则长度为 2
*/

function strLength(s, bUnicode255For1) {
  // 方法1
  // var length = s.length;
  // if (!bUnicode255For1) {
  //   for (let i in s) {
  //     if (s.charCodeAt(i) > 255) {
  //       length++;
  //     }
  //   }
  // }
  // console.log(length);
  // return length;

  // 方法2
  if (bUnicode255For1) {
    return s.length;
  }
  let len = s.length;
  s.split("").forEach((si) => {
    si.charCodeAt(0) > 255 && len++;
  });
  console.log(len);
  return len;
}

strLength("hello world, 牛客", false);
