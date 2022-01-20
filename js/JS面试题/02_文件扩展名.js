/*
  请补全JavaScript代码，要求以字符串的形式返回文件名扩展名，文件名参数为"filename"。
*/

function extensionName(filename) {
  let index = filename.lastIndexOf(".");
  // if (index !== -1) {
  //   if (filename.slice(0, index)) {
  //     extionsion = filename.slice(index);
  //     console.log(extionsion);
  //   } else {
  //     console.log(" ");
  //   }
  // }
  // 简写
  extionsion =
    filename.slice(0, index) && index !== -1 ? filename.slice(index) : "";
  console.log(extionsion);
}

extensionName("aa.txt");
