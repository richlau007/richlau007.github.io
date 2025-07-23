# Day 22：Vue基础

## 复习要点
- Vue实例、模板语法、指令（v-if、v-for、v-bind等）
- 组件化开发、props、data、methods
- 生命周期钩子
- 事件处理与双向绑定（v-model）

## 典型面试题与答案
1. **Vue的核心思想是什么？**
   - 答：数据驱动视图，响应式双向绑定。
   - 解释：数据变化自动驱动视图更新，简化开发。
2. **v-if和v-show的区别？**
   - 答：v-if是真实渲染和销毁DOM，v-show是切换display样式。
   - 解释：v-if适合条件切换少，v-show适合频繁切换。
3. **props和data的区别？**
   - 答：props是父组件传递的数据，data是组件自身数据。
   - 解释：props不可变，data可变，二者共同驱动组件渲染。
4. **Vue生命周期有哪些？**
   - 答：常见有created、mounted、updated、destroyed等。
   - 解释：生命周期钩子用于初始化、数据请求、清理等操作。

## 推荐实践
- 用props和data实现父子通信
- 用v-for渲染列表

## 相关资源
- [Vue官方文档](https://cn.vuejs.org/guide/introduction.html)