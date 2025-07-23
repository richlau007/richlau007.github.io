# Day 02：表单、input类型、原生验证、无障碍（a11y）

## 复习要点
- form表单结构与常用属性
- input常见类型（text、password、email、number、file、checkbox、radio、date等）
- 原生表单验证（required、pattern、min、max等）
- 表单label、fieldset、legend的作用
- 无障碍（a11y）基础：aria属性、tabindex、label关联

## 典型面试题与答案
1. **input有哪几种常用类型？**
   - text、password、email、number、file、checkbox、radio、date等。
2. **如何实现表单的原生验证？**
   - 使用required、pattern、min、max等属性，浏览器会自动校验。
3. **label标签的作用是什么？**
   - 提高可用性和无障碍性，点击label可聚焦对应input。
4. **如何提升表单的无障碍性？**
   - 使用label正确关联input，添加aria属性，合理设置tabindex。

## 推荐实践
- 编写一个带多种input类型和原生验证的表单
- 用屏幕阅读器体验表单无障碍

## 相关资源
- [MDN 表单](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)
- [Web无障碍指南](https://web.dev/accessibility/)