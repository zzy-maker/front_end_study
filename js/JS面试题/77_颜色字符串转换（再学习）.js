/*
  描述
  将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
  1. rgb 中每个 , 后面的空格数量不固定
  2. 十六进制表达式使用六位小写字母
  3. 如果输入不符合 rgb 格式，返回原始输入
  示例1
  输入：
  'rgb(255, 255, 255)'
  复制
  输出：
  #ffffff
*/

function rgb2hex(sRGB) {
  // 方法1，不太对
  // return sRGB.replace(
  //   /^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/,
  //   function ($0, $1, $2, $3) {
  //     return (
  //       "#" +
  //       ("0" + (+$1).toString(16)).slice(-2) +
  //       ("0" + (+$2).toString(16)).slice(-2) +
  //       ("0" + (+$3).toString(16))
  //     );
  //   }
  // );
  // 方法2
  // 去除 sRGB 的空格
  const newSRGB = sRGB.replace(/\s+/g, "");
  // 定义 rbg 的正则表达式
  const exp =
    /rgb\((0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2}),(0|1\d{0,2}|2[0-5]{2})\)/;
  // 若不符合规则，则返回原字符串
  if (!exp.test(newSRGB)) return sRGB;
  // 剔除 'rgb(' 和 ')', 剩下 'xx,xx,xx' 的字符串
  const rgbString = newSRGB.substring(4, newSRGB.length - 1);
  // 拆分上述字符串，生成数组
  const arr = rgbString.split(",");

  let color = "#";
  // 遍历数组，将每个元素转成16进制的字符串
  for (const item of arr) {
    console.log(item);
    const str = Number(item).toString(16);
    color += str.length === 2 ? str : `0${str}`;
  }
  return color;
}

rgb2hex("rgb(255,255,255)");
