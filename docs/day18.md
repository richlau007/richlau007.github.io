# Day 18：构建工具与代码规范

## 复习要点
- 构建工具（Webpack、Vite、Babel、ESLint、Prettier）
- 构建流程（打包、压缩、转译、热更新）
- 代码规范与自动化检查
- 配置文件与常用插件

## 典型面试题与答案
1. **Webpack的核心概念有哪些？**
   - 答：入口（entry）、输出（output）、加载器（loader）、插件（plugin）、模式（mode）。
   - 解释：理解核心概念有助于灵活配置和优化打包流程。
2. **Babel的作用是什么？**
   - 答：将ES6+代码转译为兼容旧浏览器的ES5代码。
   - 解释：保证新语法能在各类环境下运行。
3. **为什么要用ESLint和Prettier？**
   - 答：ESLint用于代码质量检查，Prettier用于代码格式化。
   - 解释：统一风格、减少低级错误、提升团队协作。
4. **如何实现自动化构建和检查？**
   - 答：结合npm script、CI工具、git hook等自动执行构建和检查任务。
   - 解释：自动化流程提升开发效率和代码质量。

## 推荐实践
- 配置Webpack和Babel打包项目
- 用ESLint和Prettier规范代码

## 相关资源
- [Webpack官方文档](https://webpack.js.org/concepts/)