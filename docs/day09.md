# Day 09：原型、继承、this、call/apply/bind

## 复习要点
- 原型、原型链
- 构造函数与new
- 继承方式（原型链、构造函数、ES6 class）
- this指向规则
- call/apply/bind用法

## 典型面试题与答案
1. **什么是原型和原型链？**
   - 答：每个对象有__proto__指向其原型，原型对象也有__proto__，最终指向null，形成原型链。
   - 解释：原型链实现了对象属性和方法的继承。
2. **如何实现继承？**
   - 答：ES5有原型链继承、构造函数继承、组合继承，ES6用class和extends。
   - 解释：不同继承方式适应不同场景，class语法更简洁。
3. **this的指向有哪些情况？**
   - 答：普通函数（window/undefined）、对象方法（调用者）、构造函数（实例）、箭头函数（外层this）。
   - 解释：理解this有助于避免指向错误导致的bug。
4. **call、apply、bind的区别？**
   - 答：三者都可改变this，call和apply立即执行，参数传递方式不同，bind返回新函数。
   - 解释：灵活使用能提升函数复用性和灵活性。

## 推荐实践
- 手写call/apply/bind
- 用class实现继承

## 相关资源
- [MDN 原型与继承](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)