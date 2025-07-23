# Day 12：DOM操作、事件机制、委托、常用API

## 复习要点
- DOM节点操作（增删改查）
- 常用API（querySelector、classList、dataset等）
- 事件绑定、事件对象、事件冒泡与捕获
- 事件委托原理与应用

## 典型面试题与答案
1. **如何操作DOM节点？**
   - 答：用document.querySelector、getElementById等查找节点，appendChild、removeChild等操作节点。
   - 解释：熟练操作DOM是前端开发基础。
2. **事件冒泡和捕获的区别？**
   - 答：冒泡从内到外，捕获从外到内，默认事件冒泡。
   - 解释：理解事件流有助于事件管理和委托。
3. **什么是事件委托？**
   - 答：将事件绑定到父元素，通过事件冒泡处理子元素事件。
   - 解释：提升性能，减少事件绑定数量。
4. **如何阻止事件冒泡和默认行为？**
   - 答：event.stopPropagation()阻止冒泡，event.preventDefault()阻止默认行为。
   - 解释：常用于自定义交互。

## 推荐实践
- 用事件委托实现列表点击高亮
- 用classList动态切换样式

## 相关资源
- [MDN DOM文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)