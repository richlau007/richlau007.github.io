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





  function parseJson(str) {
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

 

//------------------------lodash的核心，阅读普通函数钱一定需要了解以下核心转化函数---------------------------------
  //就是返回自身的函数 
  function identity(value) {
    return value
  }
  // 第一步，类型分发
  // 判断传入参数类型的，兼容function，object、array、string
  function iteratee(maybePredicate) {

    //传入函数  直接返回当前函数
    if (typeof maybePredicate == 'function') {
      return maybePredicate
    }

    // 传入字符串，进入处理字符串函数
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


  //传入属性名，它返回的函数就用来获取对象的属性名
  function property(prop) {
    return function (obj) {
      return get(obj, prop)
    }
  }


//默认了path 是数组
  function get2(object, path, defaultVal = undefined) {
    path = toPath(path)
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
      //递归需要把参数
      return get(object[path[0]],path.slice(1),defaultval)
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


  //isMatch
  //深层次比较两个对象 ,
 
  function isMatch(object, source) {
    // 原始类型比较
    if (object === source) {
      return true
    }
     //考虑原始类型
    if (typeof source != 'object' || typeof object != 'object') {
      return false
    }
    for (var key in source) {
      //bug   如果source[key] = 0，事实上是存在的，但是值为0，判断为假，故进入else
      if (source[key] && typeof source[key] != 'object') {
        if (object[key] !== source[key]) {
          return false
        }
      } else {
        if (!isMatch(object[key], source[key])) {
          return false
        }
      }
    }
    return true
  }

  //对象obj的属性是否和  条件对象source  一致
  //浅层比较，一层
  function matches(source) {
    return function (obj) {
      // for (var key in source) {
      //   if (obj[key] !== source[key]) {
      //     return false
      //   }
      // }
      // return true
      return isMatch(obj,source)
    }

    // return bind(isMatch,null,'__',source)
  }


//传入的是数组(用数组表示对象的 属性与值，自由一对)
  function matchesProperty(path,srcValue) {
    return function (obj) {
      return obj[path] == srcValue
      //return isEqual(get(obj,path),srcValue)
    }
  }













  //bind
  //占位绑定
  function bind (f, thisArg, ...fixedArgs) {
    return function (...args) {
      fixedArgs = fixedArgs.slice()
      args = args.slice()
      for (var i = 0; i < fixedArgs.length; i++){
        if (fixedArgs[i] == bind.placeholder) {
          if (args.length) {
            fixedArgs[i] = args.shift()
          } else {
            fixedArgs[i] = undefined
          }
        }
      }
      // console.log(fixedArgs,args)
      if (args.length) {
        // console.log(args)
        fixedArgs = fixedArgs.concat(args)
        // for (var j = 0; j < args.length; j++){
        //   fixedArgs.push(args[j])
        // }
      }
      
      console.log(fixedArgs)
      return f.apply(thisArg,fixedArgs)
    }
  }

  // 双下划线__
  bind.placeholder = '__'


 


  //--------------------------sunBy/sum求和-----------------------

  function sumBy(ary, predicate = identity) {
    predicate = iteratee(predicate)
    var s = 0
    for (let i = 0; i < ary.length; i++){
      s += predicate(ary[i],i,ary)
    }
    return s
  }
  function sum(ary) {
    return sumBy(ary)
  }

  







  //------------------------some/every---------------------------

 
  

//------------------------------Array-----------------

  //数组按size分组成二维数组
  function chunk(array, size = 1) {
    let result = []
    let arg = []
    let s = size
    for (let i = 0; i < array.length; i++) {
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


  // 压缩数组，将false, null, 0, "", undefined, and NaN等数组元素删除
  function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
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

  function concat(array, ...value) {
    for (var i = 0; i < value.length; i++){
      if (Array.isArray(value[i])) {
        for (var j = 0; j < value[i].length; j++){
          array.push(value[i][j])
        }
      } else {
        array.push(value[i])
      }
    }
    return array
  }
  
  function difference(array, ...value) {
    return differenceBy(array, ...value)
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

  function differenceWith(array, ...value) {
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
        if (iter(array[i], v[j])) break
        if (j == v.length - 1) result.push(array[i])
      }
    }
    return result
  }


  //从左边开始，抛掉n 个数组元素
  function drop(array, n = 1) {
    while (n--) {
      array.shift()
    }
    return array
  }
  
  //从右边开始，抛掉n 个数组元素
  function dropRight(array, n = 1) {
    while (n--) {
      array.pop()
    }
    return array
  }

  //从右边开始, 抛出元素，predicate（）函数返回值为false时，停止抛出
  function dropRightWhile(array, predicate = identity) {
    array = array.slice()
    predicate = iteratee(predicate)
    for (var i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        array.pop()
      }else break
    }
    return array
  }

  //从左边开始, 抛出元素，predicate（）函数返回值为false时，停止抛出
  function dropWhile(array, predicate = identity) {
    array = array.slice()
    predicate = iteratee(predicate)
    for (var i = 0; i < array.length ; i++) {
      if (predicate(array[i], i, array)) {
        array.shift()
        i--
      }else break
    }
    return array
  }

  //数组填充
  function fill(array, value, start = 0, end = array.length) {
    array = array.slice()
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function findIndex(array, predicate = identity, fromIndex = 0) {
    predicate = iteratee(predicate)
    for (var i = fromIndex; i < array.length; i++){
      if(predicate(array[i])) return i
    }
  }

  function findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
    predicate = iteratee(predicate)
    for (var i = fromIndex; i >= 0; i--){
      if(predicate(array[i])) return i
    }
  }

  function flatten(array) {
   return  flattenDepth(array)
  }

  function flattenDeep(array) {
    return flattenDepth(array,Infinity)
  }

  function flattenDepth(array, depth = 1) {
    if (depth == 0) return array
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        //result.concat必须对result进行赋值
        result = result.concat(flattenDepth(array[i], depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  function fromPairs(pairs) {
    var result = {}
    for (var element of pairs) {
      result[element[0]] = element[1]
    }
    return result
  }

  function head(array) {
    return array[0]
  }

  function indexOf(array, value, fromIndex = 0){
    for (var i = fromIndex; i < array.length; i++){
      if(array[i] == value) return i
    }
  }

  function initial(array) {
    array.pop()
    return array
  }

  function intersection(...arrays) {
    return intersectionBy(...arrays)
  }

  function intersectionBy(...arrays) {
    if (Array.isArray(arrays[arrays.length - 1])) {
      var predicate = identity
    } else {
      var predicate = arrays.pop()
      predicate = iteratee(predicate)
    }
    var result = []
    var arr = arrays.shift()
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        for (var k = 0; k < arr.length; k++) {
          if (predicate(arrays[i][j]) == predicate(arr[k])) {
            result.push(arr[k])
          }
        }
      }
    }
    
    return result
  }
  function intersectionWith(...arrays) {
    if (Array.isArray(arrays[arrays.length - 1])) {
      var predicate = identity
    } else {
      var predicate = arrays.pop()
      predicate = iteratee(predicate)
    }
    var result = []
    var arr = arrays.shift()
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        for (var k = 0; k < arr.length; k++) {
          if (predicate(arrays[i][j],arr[k])) {
            result.push(arr[k])
          }
        }
      }
    }
    
    return result
  }

  function join(array, separator=',') {
    var str = ''
    for (let element of array) {
      str += String(element) + separator
    }
    if (str.length) {
      str = str.slice(0,str.length - 1)
    }
    return str
  }
  function last(array) {
    return array.pop()
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0;i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }

  function nth(array, n = 0) {
    if (n < 0) {
      n = array.length  + n 
    }
    return array[n]
  }

  function pull(array, ...values) {

    pullAll(array,values)
    return array
  }

  function pullAll(array, values) {
    return pullAllBy(array,values)
  }

  function pullAllBy(array, values, predicate = identity) {
    predicate = iteratee(predicate)
    for (var i = 0; i < values.length; i++) {
      remove(array, it => predicate(it) == predicate(values[i]))
    }
    return array
  }

  function pullAllWith() {
    
  }


  //
  function remove(array, predicate = identity) {
    predicate = iteratee(predicate)
    var result = []
    for (var i = 0; i < array.length; i++){
      if (predicate(array[i])) {
        result.push(array[i])
        array.splice(i,1)
      }
    }
    return result
  }

  function reverse(array) {
    var i = 0
    var j = array.length - 1
    while (i < j) {
      var tmp = array[i]
      array[i] = array[j]
      array[j] = tmp
      i++
      j--
    }
    return array
  }

  function slice(array, start = 0, end = array.length) {
    var i = start
    var j = array.length - end
    while (i > 0) {
      array.shift()
    }
    while (j > 0) {
      array.pop()
    }
    return array
  }

  //sort相关的
  //
  //
  //
  //

  function tail(array) {
    array.shift()
    return array
  }

  function take(array, n = 1) {
    return array.slice(0,n)
  }

  function takeRight(array, n = 1) {
    if (array.length >= n) {
      return array.slice(array.length - n ,array.length)
    }
    return array
  }

  function takeRightWhile(array, predicate = identity) {
    predicate = iteratee(predicate)
    let result = []
    for (let i = array.length - 1; i >=0; i--){
      if (!predicate(array[i])) {
        return result
      }
      result.unshift(array[i])
    }
  }

  function takeWhile(array, predicate = identity) {
    predicate = iteratee(predicate)
    let result = []
    for (let i = 0; i < array.length; i++){
      if (!predicate(array[i])) {
        return result
      }
      result.push(array[i])
    }
  }

  function union(...arrays) {
    return unionBy(...arrays)
  }
  function unionBy(...arrays) {
    var result = []
    var mid = {}
    if (Array.isArray(arrays[arrays.length - 1])) {
      var predicate = identity
    } else {
      var predicate = iteratee(arrays.pop())
    }

    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        if (predicate(arrays[i][j]) in mid) {
          continue
        } else {
          mid[predicate(arrays[i][j])] = true
          result.push(arrays[i][j])
        }
      }
    }
    return result
  }

  //需要equal函数  先写完再回来！！！！
  function unionWith() {
    

  }


  function uniq(array) {
    return uniqBy(array)
  }


  function uniqBy(array, predicate = identity) {
    predicate = iteratee(predicate)
    let result = []
    let obj = {}
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i]) in obj) continue
      else {
        obj[predicate(array[i])] = true
        result.push(array[i])
      }
    }
    return result
  }

  //需要equal函数  先写完再回来！！！！
  function uniqWith() {

  }

  function unzip(array) {
    return zip(...array)
  }

  function unzipWith(array, predicate = identity) {
    return zipWith(...array,predicate)
  }

  function zip(...arrays) {
    var result = []
    var l = arrays.map(it => it.length).reduce((pre, it) => Math.max(pre, it), 0)
    for (var i = 0; i < l; i++) {
      var mid = []
      for (var j = 0; j < arrays.length; j++) {
        mid.push(arrays[j][i])
      }
      result.push(mid)
    }
    return result
  }

  function zipObject(prop=[],value = []) {
    let obj = {}
    for (let i = 0; i < prop.length; i++){
      obj[prop[i]] = value[i] 
    }
    return obj
  }

  function zipObjectDeep(prop =[],value = []) {
    let obj = {}
    for (let i = 0; i < prop.length; i++){
      let path = prop[i].split('.')
      let o = obj
      for (let j = 0; j < path.length; j++){
        let idx = path[j].indexOf('[')
        if (idx >= 0) {
          let str = path[j].slice(0, idx)
          if (str in o) {
            let o3 = {}
            o[str].push(o3)
            o = o3
          } else {
            o[str] = []
            let o2 = {}
            o[str].push(o2)
            o = o2
          }
        } else if (j == path.length -1) {
          o[path[j]] = value[i]
        } else {
          if (path[j] in o) {
            o = o[path[j]]
          } else {
            o[path[j]] = {}
            o = o[path[j]]
          }
        }
      }
    }
    return obj
  }

  function theArgs(arrays) {
    if (Array.isArray(arrays[arrays.length - 1])) {
      var predicate = identity
    } else {
      var predicate = iteratee(arrays.pop())
    }
    return [arrays,predicate]
  }

  function zipWith(...arrays) {
    let [arr, predicate] = theArgs(arrays)
    let result = []
    if (arr[0].length > 0) {
      for (let i = 0; i < arr[0].length; i++){
        let mid = []
        for (let j = 0; j < arr.length; j++){
          mid.push(arr[j][i] )
          if (j == arr.length - 1) {
            result.push(predicate(...mid))
          }
        }
      }
    }
    return result
  }

  function without(array, ...values) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) break
        if (j == values.length - 1) result.push(array[i])
      }
    }
    return result
  }

  function xor(...arrays) {
    // var obj = {}
    // var result = []
    // for (var i = 0; i < arrays.length; i++) {
    //   for (var j = 0; j < arrays[i].length; j++) {
    //     if (arrays[i][j] in obj) {
    //       obj[arrays[i][j]][1]++

    //     } else {
    //       obj[arrays[i][j]] = [arrays[i][j],1]
    //     }
    //   }
    // }
    // for (let element in obj) {
    //   if (obj[element][1] == 1) {
    //     // if (element >= '0' && element <= '9') {
    //     //   element = Number(element)
    //     // }
    //     result.push(obj[element][0])
    //   }
    // }
    // return result
    return xorBy(...arrays)
  }

  function xorBy(...arrays) {
    let [arr, predicate] = theArgs(arrays)
    var obj = {}
    var result = []
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        let mid = predicate(arr[i][j])
        if (mid in obj) {
          obj[mid][1]++

        } else {
          obj[mid] = [arr[i][j], 1]
        }
      }
    }
    for (let element in obj) {
      if (obj[element][1] == 1) {
        result.push(obj[element][0])
      }
    }
    return result
  }

  function xorWith() {
    
  }

// ----------------------------------------------






































  //-------------------------sort相关------------------------------
  //二分查找，返回value插入位置，最小值
  function sortedIndexBy(array, value, predicate = identity, l = 0, r = array.length - 1) {
    predicate = iteratee(predicate)

    if (l >= r) {
      if (predicate(array[l]) >= predicate(value)) return l
      else return l + 1
    }
    var minIdx = (l + r) / 2 | 0
    if (predicate(array[minIdx]) < predicate(value)) {
      return sortedIndexBy(array, value, predicate, minIdx + 1, r)
    } else {
      return sortedIndexBy(array, value, predicate, l, minIdx - 1)
    }
  }

  function sortedIndex(array, value) {
    return sortedIndexBy(array, value)
  }



  







  // ----------------------collection-------------------
  // 所谓的collection 其实就是利用 forin来实现遍历
  function countBy(collection, predicate = identity) {
    predicate = iteratee(predicate)
    var result = {}
    for (let val in collection) {
      if (predicate(collection[val]) in result) {
        result[predicate(collection[val])]++
      } else {
        result[predicate(collection[val])] = 1
      }
    }
    return result
  }


  function every(collection, predicate = identity) {
    predicate = iteratee(predicate)
    for (var key in collection) {
      if (!predicate(collection[key])) {
        return false
      }
    }
    return true
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

  function find(collection,predicate=identity,fromIndex=0) {
    predicate = iteratee(predicate)
    var start = 0
    for (let key in collection) {
      if (predicate(collection[key]) && start >= fromIndex) {
        return collection[key]
      }
    }
  }

  function findLast(collection, predicate = identity, fromIndex = collection.length - 1) {
    predicate = iteratee(predicate)
    let keys = Object.keys(collection)
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(collection[keys[i]])) {
        return collection[keys[i]]
      }
    }
  }

  function flatMap(collection, predicate = identity) {
    return flatMapDepth(collection, predicate)
  }

  function flatMapDeep(collection, predicate = identity) {
    return flatMapDepth(collection,predicate,Infinity)
  }
  
  //好好理解一下这里的思维方式！！！！！！！！
  function flatMapDepth(collection, predicate = identity, depth = 1) {
    predicate = iteratee(predicate)
    let result = []
    for (let key in collection) {
      result.push(predicate(collection[key], key, collection))
    }
    return flattenDepth(result,depth)
  }

  function forEach(collection, predicate = identity) {
    // let key = Object.keys(collection)
    predicate = iteratee(predicate)
    for (let key in collection) {
      predicate(collection[key],key,collection)
    }
    return collection
  }

  function forEachRight(collection, predicate = identity) {
    let keys = Object.keys(collection)
    predicate = iteratee(predicate)
    for (let i = keys.length - 1; i >= 0; i--) {
      predicate(collection[keys[i]],keys[i],collection)
    }
    return collection
  }
  function groupBy(collection, predicate = identity) {
    predicate = iteratee(predicate)
    let obj = {}
    for (let key in collection) {
      let str = predicate(collection[key])
      if (str in obj) {
        obj[str].push(collection[key])
      } else {
        obj[str] = [collection[key]]
      }
    }
    return obj
  }

  function includes(collection, value, fromIndex = 0) {
    if (typeof collection === 'object') {
      let keys = Object.keys(collection)
      for (let i = fromIndex; i < keys.length; i++){
        if (collection[keys[i]] === value) {
          return true
        }
      }
    } else if (typeof collection === 'string') {
      for (let j = fromIndex; j < collection.length; j++){
        if (collection.substring(j,j + value.length) === value) {
          return true
        }
      }
    }
    return false
  }

  //sort  方法还没有写，后补！！
  function invokeMap(collection, path, ...args) {
    let result = []
    let keys = Object.keys(collection)
    for (let i = 0; i < collection.length; i++){
      if (typeof path === 'Array') {
        result.push(path[i](collection[keys[i]]),args[i])
      } else if (typeof path === 'function') {
        result.push(path.call(collection[keys[i]], args[0]))
      } else if (typeof path === 'string') {
        result.push(eval(path + '(' + collection[keys[i]] + ',' + args[0] + ')'))
      }
    }
    return result
  }
  
  function keyBy(collection, predicate = identity) {
    predicate = iteratee(predicate)
    let obj = {}
    for (let key in collection) {
      let str = predicate(collection[key], key, collection)
      obj[str] = collection[key]
    }
    return obj
  }
  //map 的实现，兼容mapper  是函数和字符串
  function map(collection, predicate) {
    predicate = iteratee(predicate)
    var result = []
    for (var key in collection) {
      result.push(predicate(collection[key], key, collection))
    }
    return result
  }

  //
  function orderBy(collection,predicate = identity,orders) {
    
  }

  function partition(collection, predicate = identity) {
    predicate = iteratee(predicate)
    let t = []
    let f = []
    let result = [t,f]
    for (let key in collection) {
      if (predicate(collection[key], key, collection)) {
        t.push(collection[key])
      } else {
        f.push(collection[key])
      }
    }
    return result
  }

  function reduce(collection, predicate = identity, accumulator) {
    let keys = Object.keys(collection)
    let startIdx 
    if (accumulator) {
      startIdx = 0
    } else {
      accumulator = collection[keys[0]]
      startIdx = 1
    }
    for (let i = startIdx; i < keys.length; i++){
      accumulator = predicate(accumulator,collection[keys[i]],keys[i],collection)
    }
    return accumulator
  }


  function reduceRight(collection, predicate = identity, accumulator) {
    let keys = Object.keys(collection)
    let startIdx
    if (accumulator) {
      startIdx = keys.length - 1
    } else {
      accumulator = collection[keys[keys.length - 1]]
      startIdx = keys.length - 2
    }
    for (let i = startIdx; i >=0; i--) {
      accumulator = predicate(accumulator, collection[keys[i]], keys[i], collection)
    }
    return accumulator
  }

  function reject(collection, predicate = identity) {
    predicate = iteratee(predicate)
    let result = []
    for (let key in collection) {
      if (!predicate(collection[key], key, collection)) {
        result.push(collection[key])
      }
    }
    return result
  }

  function sample(collection) {
    return sampleSize(collection)[0]
  }

  function sampleSize(collection, n = 1) {
    let keys = Object.keys(collection)
    let result = []
    for (; n > 0; n--){
      if (keys.length == 0) break
      let idx = Math.floor(Math.random() * keys.length) 
      result.push(collection[keys[idx]])
      keys.splice(idx,1)
    }
    return result
  }

  function shuffle(collection) {
    return sampleSize(collection,Infinity)
  }

  function size(collection) {
    if (typeof collection === 'object') {
      let keys = Object.keys(collection)
      return keys.length
    }
    return collection.length
  }

  function some(collection, predicate = identity) {
    predicate = iteratee(predicate)
    for (var key in collection) {
      if (predicate(collection[key])) {
        return true
      }
    }
    return false
  }

  //解决对象排序的问题
  //解决多重排序的问题
  //第二个参数是一个数组
  function sortBy(array, predicate = [identity]) {
    var iter = iteratee(predicate.pop())
    for (var i = 1; i < array.length; i++) {
      var tmp = array[i]
      for (var j = i - 1; j >= 0; j--) {
        if (iter(array[j]) > iter(tmp)) array[j + 1] = array[j]
        else {
          break
        }
      }

      array[j + 1] = tmp
      // console.log(array)
    }
    if (predicate.length) {
      sortBy(array, predicate)
    }
    return array
  }



// -----------------------Function-----------------
  

  function curry (){}

  function defer(func, ...args) {
    let id = setTimeout(()=>func(...args), 1)
    return id
  }

  function delay(func, wait, ...args) {
    let id = setTimeout(() => func(...args),wait)
    return id 
  }

  //等toArray
  function flip(func) {
    
  }


  //----------------------------
  function castArray(value) {
    if(!arguments.length) return []
    if (Array.isArray(value)) return value
    return [value]
  }


  function conformsTo(object, source) {
    let key = Object.keys(source)[0]
    if (source[key](object[key])) return true
    return false
  }

  function eq(object, other) {
    if (object === other) return true
    if (typeof object == 'number' && typeof other == 'number') {
      if (isNaN(object) && isNaN(other)) return true
    }
    return false
  }

  //Number.EPSILON   很小的数
  function gt(object, other) {
    if (object - other > Number.EPSILON) return true
    return false
  }

  function gte(object, other) {
    if (object - other > Number.EPSILON || object === other) return true
    return false
  }
  //Number.EPSILON   很小的数
  function lt(object, other) {
    if (other - object > Number.EPSILON) return true
    return false
  }

  function lte(object, other) {
    if (other - object > Number.EPSILON || object === other) return true
    return false
  }


  //is 系列  都是基于原型的  可以回看、或者看文档
  function isArguments(value) {
    return Object.prototype.toString.call(value) ==='[object Arguments]'
  }
  function isArray(value) {
    return Object.prototype.toString.call(value) ==='[object Array]'
  }
  function isArrayBuffer(value) {
    return Object.prototype.toString.call(value) ==='[object ArrayBuffer]'
  }






  function isBoolean(value) {
    return Object.prototype.toString.call(value) ==='[object Boolean]'
  }
  
  
  
  function isDate(value) {
    return Object.prototype.toString.call(value) ==='[object Date]'
  }


  function isError(value) {
    return Object.prototype.toString.call(value) ==='[object Error]'
  }

  function isFunction(value) {
    return Object.prototype.toString.call(value) ==='[object Function]'
  }
  function isMap(value) {
    return Object.prototype.toString.call(value) ==='[object Map]'
  }

  function isNaN(value) {
    let val = value
    if (Object.prototype.toString.call(val) === '[object Number]') {
      
      if (val != val) {
        return true
      }
    }
    return false
  }

  function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Null]'
  }

  function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  }
  function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
  }
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  }
  function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  }
  function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  }
  function isSymbol(value) {
    return Object.prototype.toString.call(value) === '[object Symbol]'
  }
  function isUndefined(value) {
    return Object.prototype.toString.call(value) === '[object Undefined]'
  }
  function isWeakMap(value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]'
  }
  function isWeakSet(value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]'
  }
  




  
  //----------------------













  


  return {
    //Array
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    intersectionBy,
    intersectionWith,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    pullAll,
    pullAllBy,
    pullAllWith,
    remove,
    reverse,
    slice,

    

    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    union,
    unionBy,
    unionWith,
    uniq,
    uniqBy,
    uniqWith,
    unzip,
    unzipWith,
    zip,
    zipObject,
    zipObjectDeep,
    zipWith,
    without,
    xor,
    xorBy,
    xorWith,


    /////////
    countBy,
    every,
    filter,
    find,
    findLast,
    flatMap,
    flatMapDeep,
    flatMapDepth,
    forEach,
    forEachRight,
    groupBy,
    includes,
    invokeMap,
    keyBy,
    map,
    orderBy,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    sampleSize,
    shuffle,
    size,
    some,
    sortBy,

    /////Function/////////
    curry,
    defer,
    delay,

    //lang
    castArray,
    conformsTo,
    eq,
    gt,
    gte,
    lt,
    lte,



    isArguments,
    isArray,
    isArrayBuffer,


    isBoolean,

    isDate,
    isError,
    isFunction,
    isMap,
    isNaN,
    isNull,
    isNumber,
    isObject,
    isRegExp,
    isSet,
    isString,
    isSymbol,
    isUndefined,
    isWeakMap,
    isWeakSet,

    isMatch,
    matches,
    matchesProperty,
    property,
    bind,
    get,
    get2,
    toPath,
    parseJson,
    identity,

    sumBy,
    sum,
    
    sortedIndex,
    sortedIndexBy,
    
    
    
    
    

  }
}()