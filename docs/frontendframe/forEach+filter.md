```
schedulingListTemp.forEach((element) => {
                    var patrolUserIdTemp = element.patrolUserId;
                    var item = response.data.content.filter(
                      (t) => t.id == patrolUserIdTemp
                    );
                    if (item.length != 0) {
                      var temp = {};
                      temp.patrolPName = item[0].name;
                      temp.patrolPNameShow =
                        item[0].name + "(" + item[0].personNo + ")";
                      temp.patrolPeopleOrganizetion = item[0].deptName;
                      temp.patrolRouteText = element.patrolRouteText;
                      temp.patrolBeginTime = element.patrolBeginTime;
                      temp.patrolEndTime = element.patrolEndTime;
                      temp.patrolUserId = element.patrolUserId;
                      temp.patrolLineId = element.patrolLineId;
                      _this.schedulingList.push(temp);
                    } else {
                      var temp2 = {};
                      temp2.patrolPName = "";
                      temp2.patrolPNameShow = "";
                      temp2.patrolPeopleOrganizetion = "";
                      temp2.patrolRouteText = element.patrolRouteText;
                      temp2.patrolBeginTime = element.patrolBeginTime;
                      temp2.patrolEndTime = element.patrolEndTime;
                      temp2.patrolUserId = element.patrolUserId;
                      temp2.patrolLineId = element.patrolLineId;
                      _this.schedulingList.push(temp2);
                    }
                  });
```

