/*
  描述
  请补全JavaScript代码，要求将数组参数中的对象以总成绩(包括属性"chinese"、"math"、"english")从高到低进行排序并返回。
*/
const _rank = (array) => {
  // 补全代码
  array.sort((o, n) => {
    let oAll = o.chinese + o.math + o.english
    let nAll = n.chinese + n.math + n.english
    return nAll - oAll
  })
  console.log(array);
};

const scope = [{ chinese: 59, math: 60,english: 61  }, { chinese: 34, math: 60,english: 65 },  {chinese: 39, math: 90,english: 69  }];
_rank(scope);
