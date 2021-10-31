# VUE开发实践

## Day 1

目标：了解VUE基本原理，开发组件

### vue简介

特点：轻量、渐进式框架、响应式更新机制、学习成本低

### 课程内容

- 基础篇：Vue核心知识点
- 生态篇：大型Vue项目所需的周边技术
- 实战篇：开发基于Vue的Ant Design Pro
- 福利篇：Vue 3.0 介绍

### 语法简介

{{}} 双括号参考了mustache模板渲染引擎

v-if
v-show
v-for
...

### 组件系统

一种抽象的，允许我们使用小型、独立和通常可复用的组件构建大型应用
```
Vue.component({'组件名称'，{
    //组件配置
    props:{
        //定义在template使用的属性  命名:类型，default: xx
    },
    template:`
    //html代码
    `
    data:function(){
        return {}
    },
    methods:{

    },  
}})
```

### 事件

```
@click="do"

@delete="xxx"

用this.$emit('delete',  参数)

阻止冒泡 如 @click.stop 阻止单击事件继续传播
```

### 插槽

```
“复杂的属性”

内容分发

<solt></solt>

2.6以后
<template v-slot:xxx></template>

默认插槽、具名插槽、作用域插槽：“返回组件的函数”
```


