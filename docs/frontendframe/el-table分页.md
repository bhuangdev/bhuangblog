# el-table分页

> 注意：total一定要赋值

1. el-table属性

```
:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
```

2. 分页代码

```
<div style="text-align: center;margin-top: 30px;">
	<el-pagination
		background
		layout="prev, pager, next"
		:total="total"
		@current-change="current_change"
	></el-pagination>
</div
```

3. data中定义

```
total: 0,
pagesize: 10,
currentPage: 1
```

4. methods中定义

```
current_change: function (currentPage) {
	this.currentPage = currentPage;
}
```

