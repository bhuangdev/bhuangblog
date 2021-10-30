# 匹配拼接

```
for (var i = 0; i < _this.patrolPeople.length; i++) {
          if (_this.patrolPeople[i].patrolPName.match(_this.patrolUserName)) {
            userIdTempArray.push(_this.patrolPeople[i].patrolPId);
          }
        }
        userId = userIdTempArray.join(",");
        if (userId === "") {
          _this.schedulingList = [];
          _this.total = 0;
          return;
        }
```

