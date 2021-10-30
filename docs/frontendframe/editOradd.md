# 添加和更新调同一个组件时的判断

```
if (this.title == "添加") {
    this.addItems();
    this.$nextTick(() => {
    	this.dialogClose();
    });
} else {
    this.editItems();
    this.$nextTick(() => {
    	this.dialogClose();
    });
}
```

```
dialogClose() {
    this.$emit("changeVisible", false);  //关闭
    this.$emit("changeData");			 //刷新
}
```

