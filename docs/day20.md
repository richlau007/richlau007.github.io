# Day 20：React基础

## 复习要点
- JSX语法、组件定义（函数/类组件）
- props和state的区别与用法
- 组件生命周期（类组件）
- 事件处理与数据流
- 条件渲染与列表渲染

## 典型面试题与答案
1. **什么是JSX？**
   - 答：JSX是JavaScript的语法扩展，允许在JS中写HTML结构。
   - 解释：JSX让UI结构更直观，便于开发和维护。
2. **props和state的区别？**
   - 答：props是父组件传递的数据，state是组件自身管理的数据。
   - 解释：props不可变，state可变，二者共同驱动组件渲染。
3. **React组件有哪几种？**
   - 答：函数组件和类组件，函数组件更简洁，类组件支持生命周期。
   - 解释：函数组件配合Hooks已成为主流。
4. **组件生命周期有哪些？**
   - 答：常见有componentDidMount、componentDidUpdate、componentWillUnmount等（类组件）。
   - 解释：生命周期方法用于处理副作用、数据请求等。

## 推荐实践
- 用函数组件和类组件实现计数器
- 用props和state实现父子通信

## 相关资源
- [React官方文档](https://react.dev/learn)