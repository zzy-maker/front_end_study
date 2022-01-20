/*
  描述
  请补全JavaScript代码，完成函数的接口功能。要求如下：
  1. 函数接收两种类型的参数，分别为"get?"和"update?name=xxx&to=yyy"，"name"、"to"为参数，"xxx"、"yyy"分别为参数对应的值。
  2. 当参数为"get?"时，返回data数据
  3. 当参数为"update?name=xxx&to=yyy"时，将data中所有"name"为"xxx"的项，更改为"name"值为"yyy"
*/

let data = [{ name: "nowcoder1" }, { name: "nowcoder2" }];

const _api = (string) => {
  // 补全代码
  // 方法1
  // let method = string.split("?")[0];
  // switch (method) {
  //   case "get":
  //     return data;
  //     break;
  //   case "update": {
  //     let query = string.split("?")[1];
  //     let name = query.split("&")[0].split("=")[1];
  //     let to = query.split("&")[1].split("=")[1];
  //     for (item of data) {
  //       if (item.name === name) item.name = to;
  //     }
  //     break;
  //   }
  //   default: {
  //     return "";
  //   }
  // }
  // 方法2
  // let toArr = string.split("?");
  // let type = toArr[0];
  // if (type == "get") {
  //   return data;
  // } else {
  //   let queryObj = {};
  //   let query = toArr[1].split("&");
  //   query.forEach((item) => {
  //     let [key, value] = item.split("=");
  //     queryObj[key] = value;
  //   });
  //   data.forEach((item, index) => {
  //     if (item.name == queryObj.name) {
  //       data[index].name = queryObj.to;
  //     }
  //   });
  // }
  // 方法3 没有通过
  // if (string === "get?") {
  //   return data;
  // }
  // if (/^update\?name\=(.*)\&to\=(.*)$/g.test(string)) {
  //   for (let item of data) {
  //     item.name === RegExp.$1.trim() ? (item.name = RegExp.$2.trim()) : "";
  //   }
  // }
};
console.log(_api("update?name='nowcoder1'&to='zzy'"));
console.log(_api("get?"));
// _api("update?name='nowcoder1'&to='zzy'");
