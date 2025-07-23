# Day 05：Flexbox布局、Grid布局

## 复习要点
- Flexbox布局原理与常用属性（主轴/交叉轴、flex-direction、justify-content、align-items等）
- Grid布局基础与常用属性（grid-template、grid-area、grid-gap等）
- Flex与Grid的适用场景对比

## 典型面试题
1. Flexbox的主轴和交叉轴如何理解？
   - 答：主轴是flex-direction定义的方向（默认水平），交叉轴垂直于主轴。
   - 解释：理解主轴和交叉轴有助于灵活布局，掌握flex属性的实际效果。
2. 如何用Flex实现水平垂直居中？
   - 答：容器设置display:flex; justify-content:center; align-items:center。
   - 解释：这是最常用的居中方案，简洁高效，适用于多种场景。
3. Grid布局的核心思想是什么？
   - 答：将容器划分为行和列的网格区域，子项可精确定位到网格单元。
   - 解释：Grid适合复杂的二维布局，提升页面结构的灵活性和可维护性。
4. Flex和Grid的区别与应用场景？
   - 答：Flex适合一维布局，Grid适合二维布局。Flex更灵活，Grid更适合复杂网格。
   - 解释：合理选择布局方式能提升开发效率和页面表现力。

## 推荐实践
- 用Flex实现常见布局（导航栏、卡片、居中）
- 用Grid实现图片墙、复杂网格
- 对比两种布局的代码和效果

## 相关资源
- [MDN Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)