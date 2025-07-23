# Day 06：响应式设计、媒体查询、移动端适配

## 复习要点
- 响应式设计理念（流式布局、弹性图片、断点）
- 媒体查询语法与常用断点
- 移动端适配方案（rem/em、viewport、flexible.js等）
- 移动端常见兼容性问题

## 典型面试题
1. 响应式和自适应的区别？
   - 响应式通过媒体查询等技术适配不同屏幕，自适应通过百分比等自动调整布局。
2. 媒体查询的常见用法？
   - @media screen and (max-width: 600px) { ... }，根据屏幕宽度等条件切换样式。
3. 移动端适配常用方案有哪些？
   - rem/em布局、viewport设置、flexible.js、媒体查询、vw/vh单位等。
4. 如何处理移动端1px问题？
   - 使用transform缩放、border-image、伪元素等方式实现物理1px。

## 推荐实践
- 编写响应式页面demo，体验不同屏幕下的效果
- 尝试不同适配方案（rem、vw/vh、媒体查询）
- 用Chrome开发者工具模拟移动端调试

## 相关资源
- [MDN 媒体查询](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
- [响应式设计实践](https://juejin.cn/post/6844903476662071309)