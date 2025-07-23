# Day 08：JavaScript数据类型、变量、作用域、闭包

## 复习要点
- 基本数据类型（number、string、boolean、null、undefined、symbol、bigint）
- 引用类型（object、array、function、date、regexp等）
- typeof、instanceof、Object.prototype.toString 判断类型
- 变量声明（var/let/const）、变量提升、暂时性死区
- 作用域（全局、函数、块级）、作用域链
- 闭包的概念、原理、常见应用

## 详细知识点与代码样例

### 1. 数据类型判断
```js
console.log(typeof 123); // 'number'
console.log(typeof 'abc'); // 'string'
console.log(typeof null); // 'object'（历史遗留问题）
console.log(Array.isArray([1,2,3])); // true
console.log(Object.prototype.toString.call(new Date())); // '[object Date]'
```

### 2. 变量声明与提升
```js
console.log(a); // undefined（变量提升）
var a = 10;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### 3. 作用域与作用域链
```js
var x = 1;
function foo() {
  var y = 2;
  function bar() {
    var z = 3;
    console.log(x, y, z); // 1 2 3
  }
  bar();
}
foo();
```

### 4. 闭包的概念与应用
- **闭包定义**：函数A内部返回函数B，B引用了A作用域中的变量，A执行完后其作用域不会被销毁。
- **常见应用**：数据私有化、工厂函数、函数防抖/节流、回调等。

#### 4.1 计数器闭包
```js
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

#### 4.2 闭包实现私有变量
```js
function Person(name) {
  let age = 18;
  this.name = name;
  this.getAge = function() { return age; };
  this.setAge = function(val) { if(val > 0) age = val; };
}
const p = new Person('Tom');
console.log(p.getAge()); // 18
p.setAge(22);
console.log(p.getAge()); // 22
```

#### 4.3 闭包常见面试陷阱
```js
var arr = [];
for(var i=0; i<3; i++) {
  arr[i] = function() { return i; };
}
console.log(arr[0]()); // 3
// 解决：用let或IIFE
for(let i=0; i<3; i++) {
  arr[i] = function() { return i; };
}
console.log(arr[0]()); // 0
```

## 典型面试题与答案
1. **JavaScript有哪些数据类型？如何判断？**
   - 答：基本类型（number、string、boolean、null、undefined、symbol、bigint），引用类型（object、array、function等）。typeof、instanceof、Object.prototype.toString可辅助判断。
   - 解释：区分数据类型有助于理解内存分配和数据操作方式。
2. **var、let、const的区别？**
   - 答：var有变量提升、函数作用域，let/const无提升、块级作用域，const声明常量。
   - 解释：合理选择声明方式能避免变量污染和提升代码可维护性。
3. **什么是作用域链？**
   - 答：变量查找时会沿着当前作用域向上级作用域查找，直到全局作用域。
   - 解释：作用域链保证了变量的有序访问和封装性。
4. **什么是闭包？有什么应用？**
   - 答：闭包是函数和其词法作用域的组合，常用于数据私有化、工厂函数等。
   - 解释：闭包可保持变量不被销毁，实现持久化存储。

## 推荐实践
- 编写闭包实现计数器、私有变量
- 用let/const重写老代码，体验作用域差异
- 手动实现类型判断工具函数

## 相关资源
- [MDN 数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [JavaScript闭包详解](https://juejin.cn/post/6844903476662071309)