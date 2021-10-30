# 日期组件

- 日期限制

```
pickerBeginDateBefore: {
    disabledDate: time => {
        let beginDateVal = new Date(this.ruleForm.patrolEndTime).getTime();
        if (beginDateVal) {
        	return time.getTime() > beginDateVal;   //开始日期小于结束日期
        }
    }
},
pickerBeginDateAfter: {
    disabledDate: time => {
        let beginDateVal = new Date(this.ruleForm.patrolStartTime).getTime();
        if (beginDateVal) {
            return (                //结束日期大于开始日期且小于开始日期加7天
                time.getTime() < beginDateVal - 24 * 60 * 60 * 1000 ||
                time.getTime() > beginDateVal + 30 * 24 * 60 * 60 * 1000
            );
        }
    }
}
```

