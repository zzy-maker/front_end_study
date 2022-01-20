/*
  描述
  按所给的时间格式输出指定的时间
  格式说明
  对于 2014.09.05 13:14:20
  yyyy: 年份，2014
  yy: 年份，14
  MM: 月份，补满两位，09
  M: 月份, 9
  dd: 日期，补满两位，05
  d: 日期, 5
  HH: 24制小时，补满两位，13
  H: 24制小时，13
  hh: 12制小时，补满两位，01
  h: 12制小时，1
  mm: 分钟，补满两位，14
  m: 分钟，14
  ss: 秒，补满两位，20
  s: 秒，20
  w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
  示例1
  输入：
  formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
  复制
  输出：
  2014-09-05 13:14:20 星期五
*/

function formatDate(date, format) {
  let addZero = function (data) {
    if (data < 10) {
      return "0" + data;
    }
    return data;
  };
  let obj = {
    yyyy: date.getFullYear(),
    yy: date.getFullYear() % 100,
    MM: addZero(date.getMonth() + 1),
    M: date.getMonth() + 1,
    dd: addZero(date.getDate()),
    d: date.getDate(),
    HH: addZero(date.getDate()),
    hh: addZero(date.getHours() % 12),
    h: date.getHours() % 12,
    mm: addZero(date.getMinutes()),
    m: date.getMinutes(),
    ss: addZero(date.getSeconds()),
    s: date.getSeconds(),
    w: (function () {
      arr = ["日", "一", "二", "三", "四", "五", "六"];
      return arr[date.getDay()];
    })(),
  };
  for (let i in obj) {
    format = format.replace(i, obj[i]);
  }
  return format;
}


formatDate(new Date(1409894060000), "yyyy-MM-dd HH:mm:ss 星期w");
function foo() {
  var localOffset = new Date().getTimezoneOffset() * 60 * 1000;
  var sResult = formatDate(
    new Date(1409894060000 + localOffset),
    "yy-M-d hh:m:s 星期w"
  );
  console.log(sResult);
  return sResult === "14-9-5 05:14:20 星期五";
}
console.log(foo());
