# Day 11：异步编程（Promise、async/await、事件循环）

## 复习要点
- 异步编程的几种方式（回调、Promise、async/await）
- 事件循环、宏任务与微任务
- Promise链式调用、异常处理
- async/await语法和错误捕获

## 典型面试题与答案
1. **事件循环是什么？**
   - 答：事件循环是JS执行机制，主线程执行栈清空后处理任务队列（宏任务、微任务）。
   - 解释：理解事件循环有助于分析异步代码执行顺序。
2. **Promise和回调的区别？**
   - 答：Promise可链式调用，避免回调地狱，支持异常捕获。
   - 解释：Promise让异步代码更易维护。
3. **async/await的原理？**
   - 答：async函数返回Promise，await等待Promise结果。
   - 解释：让异步代码像同步一样书写，提升可读性。
4. **微任务和宏任务的区别？**
   - 答：微任务（Promise.then、MutationObserver）优先于宏任务（setTimeout、setInterval）执行。
   - 解释：掌握任务队列有助于优化性能和避免bug。

## 推荐实践
- 用Promise和async/await封装异步流程
- 画出事件循环执行顺序图

## 相关资源
- [MDN 事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)