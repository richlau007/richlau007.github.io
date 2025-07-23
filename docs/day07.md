# Day 07：CSS预处理器、BEM命名、动画与过渡

## 复习要点
- CSS预处理器（Sass、Less）基本语法与优势
- BEM命名规范及其意义
- CSS动画（@keyframes）、过渡（transition）属性
- 动画性能优化建议

## 典型面试题
1. 你用过哪些CSS预处理器？优缺点？
   - 答：常用Sass、Less。优点：变量、嵌套、模块化、复用性强。缺点：需编译、调试不便。
   - 解释：预处理器提升开发效率和代码组织，但需构建工具支持。
2. BEM命名规范的核心思想？
   - 答：Block-Element-Modifier，块-元素-修饰符，结构清晰、样式独立、易维护。
   - 解释：BEM规范有助于团队协作和样式复用，减少命名冲突。
3. 如何实现一个简单的动画？
   - 答：用@keyframes定义动画，配合animation属性使用；或用transition实现过渡。
   - 解释：CSS动画性能高，易于实现交互动效，提升用户体验。
4. 动画性能优化有哪些方法？
   - 答：尽量用transform/opacity，避免频繁重排重绘，开启硬件加速。
   - 解释：优化动画能减少卡顿，提升页面流畅度和用户体验。

## 推荐实践
- 用Sass/Less编写样式，体验变量、嵌套、混入等特性
- 用BEM命名写一组组件样式
- 实现按钮/弹窗的过渡和动画效果

## 相关资源
- [Sass官方文档](https://sass-lang.com/guide)
- [BEM命名规范](http://getbem.com/naming/)
- [MDN CSS动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)