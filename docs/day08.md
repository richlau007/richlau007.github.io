# Day 08：JavaScript数据类型、变量、作用域、闭包

## 复习要点
- 基本数据类型与引用类型
- typeof、instanceof、Object.prototype.toString
- 变量声明（var/let/const）、变量提升
- 作用域与作用域链
- 闭包的概念与应用

## 典型面试题与答案
1. **JavaScript有哪些数据类型？**
   - 答：基本类型（number、string、boolean、null、undefined、symbol、bigint），引用类型（object、array、function等）。
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
- 编写闭包实现计数器
- 用let/const重写老代码，体验作用域差异

## 相关资源
- [MDN 数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [JavaScript闭包详解](https://juejin.cn/post/6844903476662071309)