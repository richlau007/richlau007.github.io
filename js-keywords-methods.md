# JavaScript 关键词与方法中英对照

为了系统性地记住所有 JavaScript 的关键词和常用方法，以下内容将其分类罗列，并提供中英文对照。

## 1. JavaScript 关键词

| 英文关键词   | 中文翻译           |
|--------------|--------------------|
| break        | 跳出循环           |
| case         | 情况               |
| catch        | 捕获异常           |
| class        | 类                 |
| const        | 常量               |
| continue     | 继续执行循环       |
| debugger     | 调试器             |
| default      | 默认               |
| delete       | 删除               |
| do           | 执行               |
| else         | 否则               |
| enum         | 枚举               |
| export       | 导出               |
| extends      | 继承               |
| finally      | 最终               |
| for          | 循环               |
| function     | 函数               |
| if           | 如果               |
| import       | 导入               |
| in           | 在……之中           |
| instanceof   | 实例属于           |
| let          | 变量声明（块级作用域）|
| new          | 创建实例           |
| return       | 返回               |
| super        | 父类               |
| switch       | 选择               |
| this         | 当前对象           |
| throw        | 抛出异常           |
| try          | 尝试执行           |
| typeof       | 类型检测           |
| var          | 变量声明（函数级作用域）|
| void         | 无返回值           |
| while        | 循环               |
| with         | 扩展作用域         |
| yield        | 生成器的返回值     |
| await        | 等待异步操作完成   |
| null         | 空值               |
| true         | 真                 |
| false        | 假                 |

---

## 2. 全局对象与方法

### 全局对象

| 英文名称         | 中文名称   |
|------------------|------------|
| Infinity         | 无穷大     |
| NaN              | 非数值     |
| undefined        | 未定义     |
| eval             | 评估       |
| isFinite         | 是否有限   |
| isNaN            | 是否非数值 |
| parseFloat       | 浮点数解析 |
| parseInt         | 整数解析   |
| decodeURI        | 解码 URI   |
| decodeURIComponent | 解码 URI 组件 |
| encodeURI        | 编码 URI   |
| encodeURIComponent | 编码 URI 组件 |

### 全局方法

| 英文方法         | 中文翻译           |
|------------------|--------------------|
| eval()           | 评估字符串中的代码 |
| isFinite()       | 判断值是否为有限数 |
| isNaN()          | 判断值是否为 NaN   |
| parseFloat()     | 解析字符串为浮点数 |
| parseInt()       | 解析字符串为整数   |
| decodeURI()      | 解码 URI           |
| decodeURIComponent() | 解码 URI 组件   |
| encodeURI()      | 编码 URI           |
| encodeURIComponent() | 编码 URI 组件   |

---

## 3. 常用类及其方法

### Array（数组）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| push()       | 添加元素到末尾           |
| pop()        | 移除末尾元素             |
| shift()      | 移除开头元素             |
| unshift()    | 添加元素到开头           |
| concat()     | 合并数组                 |
| join()       | 将数组元素连接成字符串   |
| slice()      | 截取数组片段             |
| splice()     | 修改数组内容             |
| indexOf()    | 查找元素索引             |
| lastIndexOf()| 查找元素最后出现的索引   |
| forEach()    | 对每个元素执行函数       |
| map()        | 映射数组                 |
| filter()     | 过滤数组元素             |
| reduce()     | 归约数组                 |
| some()       | 判断是否至少有一个元素满足条件 |
| every()      | 判断是否所有元素满足条件 |
| find()       | 查找第一个满足条件的元素 |
| findIndex()  | 查找第一个满足条件的元素索引 |
| sort()       | 对数组排序               |
| reverse()    | 反转数组顺序             |
| fill()       | 填充数组                 |
| includes()   | 判断数组是否包含某元素   |
| flat()       | 展平数组                 |
| flatMap()    | 展平并映射数组           |

### String（字符串）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| charAt()     | 返回指定位置的字符       |
| charCodeAt() | 返回指定位置字符的 Unicode 编码 |
| concat()     | 连接字符串               |
| includes()   | 判断是否包含子字符串     |
| endsWith()   | 判断是否以指定子字符串结尾 |
| startsWith() | 判断是否以指定子字符串开始 |
| indexOf()    | 查找子字符串索引         |
| lastIndexOf()| 查找子字符串最后出现的索引 |
| match()      | 匹配正则表达式           |
| replace()    | 替换子字符串             |
| search()     | 搜索正则表达式           |
| slice()      | 截取字符串               |
| split()      | 分割字符串               |
| substring()  | 提取字符串的子部分       |
| toLowerCase()| 转换为小写               |
| toUpperCase()| 转换为大写               |
| trim()       | 去除字符串两端的空白     |
| padStart()   | 从开始填充字符串         |
| padEnd()     | 从结束填充字符串         |
| repeat()     | 重复字符串               |
| localeCompare() | 本地比较两个字符串    |
| normalize()  | 标准化字符串的形式       |

### Object（对象）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| assign()     | 复制对象属性             |
| create()     | 创建新对象               |
| defineProperty() | 定义对象属性         |
| defineProperties()| 定义多个对象属性    |
| entries()    | 返回对象的键值对         |
| freeze()     | 冻结对象                 |
| fromEntries()| 从键值对数组创建对象     |
| getOwnPropertyDescriptor() | 获取对象属性描述符 |
| getOwnPropertyDescriptors()| 获取所有对象属性描述符 |
| getPrototypeOf() | 获取对象的原型       |
| hasOwnProperty() | 判断对象是否有某属性 |
| is()         | 判断两个值是否相同       |
| isExtensible()| 判断对象是否可扩展     |
| isFrozen()   | 判断对象是否被冻结       |
| isSealed()   | 判断对象是否被密封       |
| keys()       | 获取对象的键             |
| preventExtensions() | 阻止对象扩展      |
| seal()       | 密封对象                 |
| setPrototypeOf() | 设置对象的原型       |
| values()     | 获取对象的值             |

### Function（函数）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| apply()      | 调用函数并改变 this      |
| bind()       | 绑定函数的 this          |
| call()       | 调用函数并改变 this      |
| toString()   | 转换函数为字符串         |
| length       | 参数数量属性             |
| name         | 函数名属性               |

### Math（数学）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| abs()        | 绝对值                   |
| ceil()       | 向上取整                 |
| floor()      | 向下取整                 |
| round()      | 四舍五入                 |
| max()        | 最大值                   |
| min()        | 最小值                   |
| pow()        | 次方                     |
| sqrt()       | 平方根                   |
| random()     | 生成随机数               |
| sin()        | 正弦                     |
| cos()        | 余弦                     |
| tan()        | 正切                     |
| asin()       | 反正弦                   |
| acos()       | 反余弦                   |
| atan()       | 反正切                   |
| log()        | 对数                     |
| exp()        | 指数                     |
| sinh()       | 双曲正弦                 |
| cosh()       | 双曲余弦                 |
| tanh()       | 双曲正切                 |
| hypot()      | 计算直角三角形的斜边     |
| trunc()      | 截断小数部分             |
| sign()       | 符号函数                 |

### Date（日期）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| now()        | 当前时间戳               |
| parse()      | 解析日期字符串           |
| UTC()        | 世界协调时间             |
| getDate()    | 获取月份中的日期         |
| getDay()     | 获取星期几               |
| getFullYear()| 获取完整年份             |
| getHours()   | 获取小时                 |
| getMilliseconds() | 获取毫秒            |
| getMinutes() | 获取分钟                 |
| getMonth()   | 获取月份                 |
| getSeconds() | 获取秒                   |
| getTime()    | 获取时间戳               |
| getTimezoneOffset() | 获取时区偏移量    |
| getUTCDate() | 获取 UTC 月份中的日期    |
| getUTCDay()  | 获取 UTC 星期几          |
| getUTCFullYear() | 获取 UTC 完整年份    |
| getUTCHours()| 获取 UTC 小时            |
| getUTCMilliseconds() | 获取 UTC 毫秒    |
| getUTCMinutes() | 获取 UTC 分钟         |
| getUTCMonth() | 获取 UTC 月份           |
| getUTCSeconds() | 获取 UTC 秒           |
| setDate()    | 设置月份中的日期         |
| setFullYear()| 设置完整年份             |
| setHours()   | 设置小时                 |
| setMilliseconds() | 设置毫秒            |
| setMinutes() | 设置分钟                 |
| setMonth()   | 设置月份                 |
| setSeconds() | 设置秒                   |
| setTime()    | 设置时间戳               |
| setUTCDate() | 设置 UTC 月份中的日期    |
| setUTCFullYear() | 设置 UTC 完整年份    |
| setUTCHours()| 设置 UTC 小时            |
| setUTCMilliseconds() | 设置 UTC 毫秒    |
| setUTCMinutes() | 设置 UTC 分钟         |
| setUTCMonth() | 设置 UTC 月份           |
| setUTCSeconds() | 设置 UTC 秒           |
| toDateString() | 转换为日期字符串       |
| toISOString() | 转换为 ISO 字符串       |
| toJSON()      | 转换为 JSON 字符串      |
| toLocaleDateString() | 转换为本地日期字符串 |
| toLocaleString() | 转换为本地字符串     |
| toLocaleTimeString() | 转换为本地时间字符串 |
| toString()    | 转换为字符串            |
| toTimeString()| 转换为时间字符串        |
| toUTCString() | 转换为 UTC 字符串       |
| valueOf()     | 获取原始值              |

### Promise（承诺）

| 英文方法     | 中文翻译                 |
|--------------|--------------------------|
| then()       | 链接成功回调             |
| catch()      | 链接失败回调             |
| finally()    | 链接最终回调             |
| all()        | 等待所有 Promise 完成    |
| race()       | 哪个 Promise 最先完成即可 |
| resolve()    | 快速返回一个已解决的 Promise |
| reject()     | 快速返回一个已拒绝的 Promise |

---

以上内容涵盖了 JavaScript 中的关键词以及一些常用类和方法的中英对照。这将帮助你更系统地记忆和理解 JavaScript 的基础内容。建议结合实际编码练习，加深记忆和理解。