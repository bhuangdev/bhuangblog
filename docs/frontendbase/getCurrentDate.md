# 获取当前时间

```
getCurrentDate () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (month < 10) {
    	month = "0" + month;
    }
    if (day < 10) {
    	day = "0" + day;
    }
    if (hour < 10) {
    	hour = "0" + hour;
    }
    if (minute < 10) {
    	minute = "0" + minute;
    }
    if (second < 10) {
    	second = "0" + second;
    }
    var nowDate =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;
    return nowDate;
}
```

- 明天

```
var tomrrowDay = new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).format("yyyy-MM-dd 00:00:00");
      
```

