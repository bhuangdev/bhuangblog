# table组件 写columns 属性时render自定义内容

```
prop: "action",
label: this.$t("noticePage.OPERATE"),
align: "center",
tableWidth: 260,
render: (createElement, params) => {
    return createElement("div", [
        createElement(
            "td-button",
            {
                style: "min-width:25px !important",
                attrs: {
                	type: "text"
                },

                on: {
                    click: _ => {
                    	this.openDialog(params.row);
                    }
                }
            },
            "编辑"
        )
    ]);
    }
}
```



