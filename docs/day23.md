# Day 23：Vue进阶

## 复习要点
- Vuex状态管理、Vue Router路由
- 计算属性与侦听器
- 插槽、动态组件、异步组件
- Composition API与响应式原理

## 典型面试题与答案
1. **Vuex的核心概念有哪些？**
   - 答：state、getter、mutation、action、module。
   - 解释：集中式管理全局状态，便于维护和调试。
2. **计算属性和侦听器的区别？**
   - 答：计算属性有缓存，侦听器用于异步或复杂逻辑。
   - 解释：合理选择能提升性能和代码可读性。
3. **什么是插槽？**
   - 答：插槽用于组件内容分发，实现灵活布局。
   - 解释：提升组件复用性和灵活性。
4. **Composition API的优势？**
   - 答：更好地逻辑复用、类型推断、代码组织。
   - 解释：适合大型项目和复杂逻辑。

## 推荐实践
- 用Vuex实现全局状态管理
- 用插槽实现灵活组件

## 相关资源
- [Vue Composition API](https://cn.vuejs.org/guide/extras/composition-api-faq.html)