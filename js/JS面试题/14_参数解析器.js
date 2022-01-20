/*
  描述
  请补全JavaScript代码，要求将字符串参数URL中的参数解析并以对象的形式返回。
  示例1
  输入：
  getParams('https://nowcoder.com/online?id=1&salas=1000')
  复制
  输出：
  {id:1, salas: 100}
*/

const _getParams = (url) => {
  // 补全代码
  let obj = {}
  // 方法一：split
  let param = url.split('?')[1].split('&')
  // 方法二：正则
  // let param = url.match(/(\w+)=(\w+)/gi);
  param.map(item => {
    let [key, value] = item.split('=')
    obj[key] = value
  })
  return obj
}
_getParams('https://nowcoder.com/online?id=1&salas=1000')