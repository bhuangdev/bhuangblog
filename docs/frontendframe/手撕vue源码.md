## Flow

- 作用：静态类型检查
  - 什么是静态类型检查？在编译期尽早发现（由类型错误引起的）bug

- 检查方法：
  - 直接向变量里传值来推断
  - 写好类型注释，在向变量里传值 例：x: number
- 遇到flow不认识的第三方库解决办法：`libdef` 的概念（没看懂=_=）

> Weex：使用流行的Web开发体验来开发高性能原生应用（Android,IOS,Web）的框架



## vue.js源码目录

### compiler

> ast 语法树：抽象语法树，不依赖于具体的文法，不依赖于语言的细节

包含vue.js所有编译相关的代码

### core

包含vue.js的核心代码：

- 内置组件

- 全局API封装

- Vue实例化

- 观察者

- 虚拟DOM

- 工具函数
- 等

### platform

Vue.js是跨平台的mvvm框架，可以跑在web上也可以配合weex跑在native客户端上

> native:原生app

to be continue https://ustbhuangyi.github.io/vue-analysis/v2/prepare/directory.html#server