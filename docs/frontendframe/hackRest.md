# 组件强制刷新技巧

>  在实际开发过程中经常会遇到动态取值之后vue组件不能刷新的问题，解决办法就是利用v-if，改变状态，强制刷新

- 在要刷新的组件上定义v-if="hackReset"

```
v-if="hackReset"
```

- data里定义变量

```
hackReset: true
```

- 在需要刷新的位置加上刷新代码

```
this.hackReset = false;
this.$nextTick(() => {
	this.hackReset = true;
});
```

