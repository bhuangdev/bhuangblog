# el-date-picker

initDefaultDate() {

   var s1 = moment(new Date()).format("YYYY-MM-DD 08:00:00");

   var s2 = moment(new Date()).format("YYYY-MM-DD 17:00:00");

   this.leaveForm.leaveDate = [s1, s2];

   this.leaveForm.totalHour = 8;

  }



changeDate() {

   var from = moment(new Date(this.leaveForm.leaveDate[0])).format(

​    this.leaveForm.leaveDate[0].getMinutes() >= 30

​     ? "YYYY-MM-DD HH:30:00"

​     : "YYYY-MM-DD HH:00:00"

   );

   var to = moment(new Date(this.leaveForm.leaveDate[1])).format(

​    this.leaveForm.leaveDate[1].getMinutes() >= 30

​     ? "YYYY-MM-DD HH:30:00"

​     : "YYYY-MM-DD HH:00:00"

   );

   this.leaveForm.leaveDate = [from, to];



   var fromDate = from.toString().split(" ")[0];

   var toDate = to.toString().split(" ")[0];



   var fromDateArr = fromDate.split("-");

   var toDateArr = toDate.split("-");



   var totalDays = Math.abs(

​    (new Date(

​     fromDateArr[1] + "-" + fromDateArr[2] + "-" + fromDateArr[0]

​    ) -

​     new Date(toDateArr[1] + "-" + toDateArr[2] + "-" + toDateArr[0])) /

​     1000 /

​     60 /

​     60 /

​     24

   );

   var totalDaysfloor = Math.floor(totalDays);

   var totalHour = 0;



   if (0 !== totalDays) {

​    totalHour = totalDaysfloor * 8;



​    var additionalHour = to.toString().split(" ")[1].split(":")[0];

​    totalHour += additionalHour > 8 ? additionalHour - 8 : 0;

   } else {

​    var fromTime = from.toString().split(" ")[1];

​    var toTime = to.toString().split(" ")[1];

​    totalHour = Math.abs(toTime.split(":")[0] - fromTime.split(":")[0]);

   }

   this.leaveForm.totalHour = totalHour;

  },