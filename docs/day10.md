# Day 10：ES6+新特性

## 复习要点
- let/const、解构赋值、模板字符串
- 箭头函数、默认参数、剩余参数
- 对象和数组的扩展
- Promise、async/await
- Set、Map、Symbol、迭代器、生成器

## 典型面试题与答案
1. **let和const的区别？**
   - 答：let可变，const不可变（指向的引用不可变），都具备块级作用域。
   - 解释：合理使用可提升代码安全性。
2. **箭头函数和普通函数的区别？**
   - 答：箭头函数没有this、arguments、不能作为构造函数。
   - 解释：适合回调和简化代码，不适合需要this的场景。
3. **Promise的基本用法？**
   - 答：Promise用于异步操作，then/catch/finally链式调用。
   - 解释：解决回调地狱，提升异步代码可读性。
4. **Set和Map的区别？**
   - 答：Set是值的集合，Map是键值对集合，键可为任意类型。
   - 解释：适合去重、映射等场景。

## 推荐实践
- 用Promise封装异步请求
- 用解构和扩展运算符重构对象操作

## 相关资源
- [MDN ES6新特性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)