# vue页面组件化-父子组件传值

> 页面组件化涉及到父子组件传值的问题，需要用到props和emit

- 父组件引

```
 <Dialog
 	:dialogVisible="visible"   //需要向子组件传值的属性
 	:title="title"
	:width="width"
 	@changeVisible="changeV"   //子组件向父组件传值及操作的途径方法
 />
```

```
import Dialog from "@/newsModules/noticeDialog";
```

```
components: {
	Dialog
}
```

```
data里
visible：false,
title:"",
width:""
```

```
changeV(e) {
	this.visible = e;    //e是从子组件传过来的值
	this.getNoticeData(); //子组件传值的同时调用父组件的初始化方法来刷新父组件的值
}
```

- 子组件定义

```
balabala(组件代码)
```

```
props: {    //用props定义需要从父组件接收值的变量
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
}
```

```
handleClose() {
	this.$emit("changeVisible", false);  //把false作为值传给changeVisible方法
}
```

