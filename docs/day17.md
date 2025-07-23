# Day 17：模块化与包管理

## 复习要点
- 模块化发展历程（IIFE、CommonJS、AMD、ESM）
- ES6模块语法（import/export）
- CommonJS与ESM的区别
- 包管理工具（npm、yarn、pnpm）
- 依赖管理与版本控制

## 典型面试题与答案
1. **为什么需要模块化？**
   - 答：模块化能拆分代码、提升复用性、便于维护和协作。
   - 解释：解决全局变量污染和依赖混乱问题。
2. **CommonJS和ESM的区别？**
   - 答：CommonJS同步加载、运行时导出，ESM静态分析、编译时导出，支持tree-shaking。
   - 解释：ESM更适合前端，支持静态优化。
3. **npm和yarn的区别？**
   - 答：yarn速度快、锁文件更安全，npm生态更大，pnpm节省磁盘空间。
   - 解释：选择合适工具能提升开发效率。
4. **如何管理依赖版本？**
   - 答：使用package.json指定依赖范围，锁文件锁定具体版本，定期升级。
   - 解释：合理管理依赖可避免版本冲突和安全隐患。

## 推荐实践
- 用import/export重构模块
- 体验yarn/pnpm包管理

## 相关资源
- [MDN ES6模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)