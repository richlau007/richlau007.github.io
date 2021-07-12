    // # 注意事项

    //   * 刷lodash是加深对js的理解
    //   * 刷leetcode是锻炼编程能力
    //   * 不要使用转换为字符串再转回去的办法实现任何函数
    //   * 文档中示例代码及注释不能完全看懂的先别做
    //   * 整条全黄的话会有错误原因的告知，hover查看并修改即可
    //   * 没有更新的话Ctrl+F5强刷即可
    //   * 一般来说如非题目要求，不要修改函数的输入，而是返回新的值，即实现为纯函数

    //   * 用户名不要以数字开头，以数字开头的同学请至github更改用户名，不用重新注册
    //   * 文件名中最好不要包含中划线，如果包含中划线，请将中划线换为下划线然后做为变量名及文件名的前缀
    //   * 文件名(<username>-lodash.js)全小写，用户名与'lodash'之间的分隔符为中划线
    //   * 文件中的变量名全小写: var foobar = {chunk: function(){}}
    
var richlau007 = function () {

  //数组分组
  function chunk(array, size = 1) {
    let result = []
    let arg = []
    let s = size
    for (let i = 0; i < array.length; i++){
      arg.push(array[i])
      if (--s == 0) {
        result.push(arg)
        arg = []
        s = size
      }
    }
    if (arg != []) result.push(arg)
    return result
  }


  // 压缩数组
  function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++){
      if (isNaN(array[i])) continue
      else {
        switch (array[i]) {
          case false:
          case null:
          case 0:
          case "":
          case undefined:
            continue;
            break;
          default:
            result.push(array[i])
            break;
        }
      }
    }
    return result
  }

  function uniq(array) {
    let result = []
    let obj = {}
    for (var i = 0; i < array.length; i++){
      if (array[i] in obj) continue
      else {
        obj[array[i]] = true
        result.push(array[i])
      }
    }
    return result
  }

  function join() {
    
  }


  return {
    chunk,
    compact,
    uniq,
  }
}()