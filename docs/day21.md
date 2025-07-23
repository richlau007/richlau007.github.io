# Day 21：React进阶

## 复习要点
- React Hooks（useState、useEffect、useContext等）
- Context、Redux/MobX状态管理
- React Router路由原理与用法
- 组件通信与优化（memo、useCallback、useMemo）

## 典型面试题与答案
1. **什么是React Hooks？常用的有哪些？**
   - 答：Hooks是函数组件的状态和副作用管理API，常用有useState、useEffect、useContext等。
   - 解释：Hooks让函数组件具备类组件的能力，简化代码结构。
2. **Context和Redux的区别？**
   - 答：Context适合轻量级跨层传递，Redux适合复杂全局状态管理。
   - 解释：根据项目复杂度选择合适方案。
3. **如何实现组件间通信？**
   - 答：props、context、事件、状态管理库等。
   - 解释：合理选择通信方式能提升组件解耦和复用。
4. **如何优化React性能？**
   - 答：使用React.memo、useMemo、useCallback、懒加载等。
   - 解释：优化渲染和数据流，提升页面流畅度。

## 推荐实践
- 用useState/useEffect实现计数器
- 用Context或Redux实现全局状态管理

## 相关资源
- [React Hooks官方文档](https://react.dev/reference/react)