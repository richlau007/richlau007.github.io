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
    if (arg.length) result.push(arg)
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


  function uniqBy(array,f) {
    let result = []
    let obj = {}
    for (var i = 0; i < array.length; i++) {
      let item
      if (typeof(array[i])=== "object") {
        item = array[i][f]
      } else {
        item = f(array[i])
      }
      if (item in obj) continue
      else {
        obj[item] = true
        result.push(array[i])
      }
    }
    return result
  }

  function flattenDeep(array) {
    var result = []
    for (var i = 0; i < array.length; i++){
      if (Array.isArray(array[i])) {
        //result.concat必须对result进行赋值
          result = result.concat(flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  function flattenDepth(array, depth = 1) {
    if(depth == 0 ) return array
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        //result.concat必须对result进行赋值
        result = result.concat(flattenDepth(array[i],depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  }
  function groupBy(collection, iteratee) {
    let obj = {}
    for (var i = 0; i < collection.length; i++){
      let item = collection[i]
      let group
      if (typeof (iteratee) === "function") {
        //为什么 String（）没有生效？
        group = String(iteratee(item))
      } else {
        group = String(item[iteratee])
      }
      if (!(group in obj)) {
        obj[group] = []
      } 
      obj[group].push(item)
    }
    return obj
  }

  function keyBy(collection, iteratee) {
    let obj = {}
    for (var i = 0; i < collection.length; i++){
      let item = collection[i]
      let key
      if (typeof (iteratee) === "function") {
        //为什么 String（）没有生效？
        key = String(iteratee(item))
      } else {
        key = String(item[iteratee])
      }

      obj[key] = (item)
    }
    return obj
  }

  function forEach(collection, action) {
      for (let item in collection) {
        action(collection[item],item)
      }
  }

  function drop(array, n = 1) {
    while (n--) {
      array.shift()
    }
    return array
  }

  function dropRight(array, n = 1) {
    while (n--) {
      array.pop()
    }
    return array
  }

  function difference(array, ...value) {
    return differenceBy(array,...value)
  }

  function differenceBy(array, ...value) {
    
    if (Array.isArray(value[value.length - 1])) {
      var iter = identity
    } else {
      var iter = iteratee(value.pop())
    }
    var v = []
    for (var ary of value) {
      v = v.concat(ary)
    }
    let result = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < v.length; j++) {
        if (iter(array[i]) == iter(v[j])) break
        if (j == v.length - 1) result.push(array[i])
      }
    }
    return result
  }

  function differenceWith(array,...value) {
    if (Array.isArray(value[value.length - 1])) {
      var iter = identity
    } else {
      var iter = iteratee(value.pop())
    }
    var v = []
    for (var ary of value) {
      v = v.concat(ary)
    }
    let result = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < v.length; j++) {
        if (iter(array[i],v[j])) break
        if (j == v.length - 1) result.push(array[i])
      }
    }
    return result
  }



  function identity(value){
    return value
  }


//---------------------------------------------------------
  // map
  //支持数组 和 对象


  //传入属性名，它返回的函数就用来获取对象的属性名
  //
  function property(prop) {
    return function (obj) {
      return obj[prop]
    }
  }


//默认了path 是数组（不符合真实情况）
  function get2(object, path ,defaultVal = undefined) {
    for (var i = 0; i < path.length; i++){
      if (object == undefined) {
        return defaultVal
      } else {
        object = object[path[i]]
      }
    }
    return object
  }

  //get 递归写法
  function get(object, path, defaultval = undefined) {
    path = toPath(path)
    if (object == undefined) {
      return defaultval
    } else if (path.length == 0) {
      return object
    } else {
      return get(object[path[0]],path.slice(1))
    }
  }


//toPath 将属性路径转化为数组，返回给get使用
  function toPath(val) {
    if (Array.isArray(val)){
      return val
    } else {
      return val.split('][')
      .reduce((ary, it) => ary.concat(it.split('].')), [])
      .reduce((ary, it) => ary.concat(it.split('[')), [])
      .reduce((ary, it) => ary.concat(it.split('.')), [])
    }
  }


  //对象obj的属性是否和  条件对象source  一致
  //浅层比较，一层
  function matches(source) {
    return function (obj) {
      for (var key in source) {
        if (obj[key] !== source[key]) {
          return false
        }
      }
      return true
    }
  }


//传入的是数组(用数组表示对象的 属性与值，自由一对)
  function matchesProperty(path,srcValue) {
    return function (obj) {
      return obj[path] == srcValue
    }
  }

  // 判断传入参数类型的，兼容function，object、array、string
  function iteratee(maybePredicate) {
    if (typeof maybePredicate == 'function') {
      return maybePredicate
    }
    if (typeof maybePredicate == 'string') {
      return property(maybePredicate)
    }
    if (Array.isArray(maybePredicate)) {
      return matchesProperty(...maybePredicate)
    }
    if (typeof maybePredicate == 'object') {
      return matches(maybePredicate)
    }
  }


  //map 的实现，兼容mapper  是函数和字符串
  function map(collection, mapper) {
    mapper = iteratee(mapper)
    var result = []
    for (var key in collection) {
      result.push(mapper(collection[key],key,collection))
    }
    return result
  }
  

  //filter,兼容predicate  函数、对象、数组、字符串
  function filter(collection, predicate) {
    predicate = iteratee(predicate)
    var result = []
    for (var key in collection) {
      if (predicate(collection[key], key, collection) === true) {
        result.push(collection[key])
      }
    }
    return result
  }






  //bind
  //占位绑定
  function bind(f, thisArg, ...fixedArgs) {
    return function (...args) {
      
    }
  }

  //isMatch

  function isMatch(object, source) {
    
  }


  //sunBy

  function sumBy(ary, predicate) {
    
  }








  function parseJSON(str) {
    var i = 0
    return parseValue()
    function parseValue() {
      if (str[i] == '[') {
        return parseArray()
      }
      if (str[i] == '{') {
        return parseObject()
      }
      if (str[i] == '"') {
        return parseString()
      }
      if (str[i] == 't') {
        return parseTrue()
      }
      if (str[i] == 'f') {
        return parseFalse()
      }
      if (str[i] == 'n') {
        return parseNull()
      }
      return parseNumber()

    }

    function parseTrue() {
      i += 4
      return true
    }
    function parseFalse() {
      i += 5
      return false
    }
    function parseNull() {
      i += 4
      return null
    }

    function parseString() {
      var star = ++i
      while (str[i] !== '"') {
        i++
      }
      return str.slice(star, i++)
    }
    function parseNumber() {
      var star = i
      while (str[i] >= '0' && str[i] <= '9') {
        i++
      }
      return Number(str.slice(star, i))
    }

    function parseArray() {
      var result = []
      i++
      while (str[i] !== ']') {
        result.push(parseValue())
        if (str[i] == ',') {
          i++
        }
      }
      i++
      return result
    }

    function parseObject() {
      var result = {}
      i++
      while (str[i] !== '}') {
        var key = parseValue()
        i++
        var val = parseValue()
        result[key] = val
        if (str[i] == ',') {
          i++
        }
      }
      i++
      return result
    }
  }

  return {
    chunk,
    compact,
    uniq,
    uniqBy,
    flattenDeep,
    flattenDepth,
    groupBy,
    keyBy,
    forEach,
    drop,
    dropRight,
    difference,
    differenceBy,


    matches,
    matchesProperty,
    property,
    map,
    filter,
    get,
    get2,
    toPath,
    parseJSON,
    identity,
    

  }
}()