# table批量删除选中行

```
let rows = this.$refs.tableRefName.getSelectAllRows();
let ids = [];
rows.forEach(item => ids.push(item.id));
api.delete(ids,response=>{})
```

