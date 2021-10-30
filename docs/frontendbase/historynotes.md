# 滚动条与图片移动

```
<html>
<title>xxx</title>

<head></head>

<body>
    <div id="out" style="width:100%;height:1300px;position: absolute;">
        <hr />
        <div style="width:100%;height:100%">
            <img id="sImg" src="../Pictures/th.jpg" style="width:1200px;height:400px;position:absolute" />
        </div>
    </div>
</body>
<script>
    var yValue = 0;
    window.onscroll = scrollBottomOrTop;
    function scrollBottomOrTop() {
        if (yValue > window.scrollY) {
            var temp = yValue - window.scrollY
            move(temp);
        } else {
            var temp = yValue - window.scrollY
            move(temp);
        }
        yValue = window.scrollY;
        console.log(yValue);
    }

    var img = document.getElementById("sImg");
    img.top = 0;
    function move(k) {
        if (k > 0) {
            img.top = img.top - Math.abs(k);
        } else {
            img.top = img.top + Math.abs(k);
        }

        return img.style.top = img.top + 'px';
    }
</script>

</html>
```

# 全局存储变量

- 存

```
localStorage.setItem('存储的名字', 要存的数据)
```

- 取

```
var xxx - localStorage.存储的名字
```

# 数组里按时间排序

1. 把数组里的时间参数转化成值

   temp.sorttime = new Date(tempList[i].createTime).getTime();

2. 对数组里的值进行排序

   list.sort(this.compare("sorttime"));

3. compare方法

   ```
   compare(property) {
         return function (a, b) {
           var value1 = a[property];
           var value2 = b[property];
           return value2 - value1;
         };
       }
   ```

# 不同分辨率动态赋值

```
if (window.innerWidth > 1440) {
	this.dialogwidth = "27.5%";
} else {
	this.dialogwidth = "37%";
}

dialogwidth:""
```

# table批量删除选中行

```
let rows = this.$refs.tableRefName.getSelectAllRows();
let ids = [];
rows.forEach(item => ids.push(item.id));
api.delete(ids,response=>{})
```

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


# object对象取key和value

```
licenseN = Object.keys(row.action.licenseNumberMap);
						statusN = Object.values(row.action.licenseNumberMap);
```


# 去重

```
listUnique(array) {
      var r = [];
      for (var i = 0, l = array.length; i < l; i++) {
        for (var j = i + 1; j < l; j++)
          if (JSON.stringify(array[i]) == JSON.stringify(array[j])) j = ++i;
        r.push(array[i]);
      }
      return r;
    }
```

```
unique(arr) {
      var hash = [];
      for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
          hash.push(arr[i]);
        }
      }
      return hash;
    }
```