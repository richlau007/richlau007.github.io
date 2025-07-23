# Day 04：CSS选择器、优先级、盒模型、常用属性

## 复习要点
- 常用选择器（基础、组合、伪类、伪元素、属性选择器）
- 选择器优先级计算规则
- 盒模型（标准盒模型、IE盒模型、box-sizing）
- display、position、float、clear、z-index
- 常用文本、字体、背景、边框、间距属性

## 典型面试题
1. 说说你了解的CSS选择器有哪些？
   - 答：基础选择器（元素、类、ID、通配符）、组合选择器（后代、子、相邻兄弟、通用兄弟）、伪类（:hover、:active、:nth-child等）、伪元素（::before、::after）、属性选择器（[type="text"]等）。
   - 解释：掌握多种选择器有助于精准选中元素，提升样式控制力和代码可维护性。
2. 选择器优先级如何计算？
   - 答：内联样式 > ID选择器 > 类/伪类/属性选择器 > 元素/伪元素选择器。具体分值：内联1000，ID 100，类/伪类/属性10，元素/伪元素1。
   - 解释：理解优先级有助于解决样式冲突，避免样式失效。
3. 盒模型的区别与实际开发中的应用？
   - 答：标准盒模型width只包含内容区，IE盒模型width包含内容+padding+border。可用box-sizing切换。
   - 解释：不同盒模型影响布局和计算，box-sizing:border-box常用于现代开发，简化宽高计算。
4. 如何实现水平垂直居中？
   - 答：行内元素用text-align/line-height，块级元素用margin:auto、flex、grid等。
   - 解释：掌握多种居中方法能应对不同布局需求，提升页面美观性。

## 推荐实践
- 编写选择器练习demo，尝试不同优先级覆盖
- 用开发者工具查看盒模型
- 实现常见布局：两栏/三栏/圣杯/双飞翼

## 相关资源
- [MDN CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
- [CSS盒模型详解](https://juejin.cn/post/6844903476662071309)