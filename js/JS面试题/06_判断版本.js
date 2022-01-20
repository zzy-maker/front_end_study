/*
  描述
  请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
  注意：
  1. 版本号格式均为"X.X.X"
  2. X∈[0,9]
  3. 当两个版本号相同时，不需要更新
*/

// 方法一
const _shouldUpdate = (oldVersion, newVersion) => {
  // 补全代码
  let oldV = oldVersion.toString();
  let newV = newVersion.toString();
  let fianlV =
    newV[0] > oldV[0] ||
    (newV[0] === oldV[0] && newV[2] > oldV[2]) ||
    (newV[0] === oldV[0] && newV[2] === oldV[2] && newV[4] > oldV[4])
      ? true
      : false;
  return fianlV;
};

console.log(_shouldUpdate("0.0.2", "0.0.0"));

// 方法二
const _shouldUpdate2 = (oldVersion, newVersion) => {
  return newVersion > oldVersion;
};
_shouldUpdate2("0.0.2", "0.0.0");

// 方法三
const _shouldUpdate3 = (oldVersion, newVersion) => {
  return oldVersion.replace('.','') < newVersion.replace('.','') ? true : false
  //  return oldVersion.replace('.', '') < newVersion.replace('.', '')
};
_shouldUpdate3("0.0.2", "0.0.0");
