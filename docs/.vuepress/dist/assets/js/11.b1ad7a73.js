(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{523:function(t,a,e){"use strict";e.r(a);var n=e(70),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"滚动条与图片移动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#滚动条与图片移动"}},[t._v("#")]),t._v(" 滚动条与图片移动")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<html>\n<title>xxx</title>\n\n<head></head>\n\n<body>\n    <div id="out" style="width:100%;height:1300px;position: absolute;">\n        <hr />\n        <div style="width:100%;height:100%">\n            <img id="sImg" src="../Pictures/th.jpg" style="width:1200px;height:400px;position:absolute" />\n        </div>\n    </div>\n</body>\n<script>\n    var yValue = 0;\n    window.onscroll = scrollBottomOrTop;\n    function scrollBottomOrTop() {\n        if (yValue > window.scrollY) {\n            var temp = yValue - window.scrollY\n            move(temp);\n        } else {\n            var temp = yValue - window.scrollY\n            move(temp);\n        }\n        yValue = window.scrollY;\n        console.log(yValue);\n    }\n\n    var img = document.getElementById("sImg");\n    img.top = 0;\n    function move(k) {\n        if (k > 0) {\n            img.top = img.top - Math.abs(k);\n        } else {\n            img.top = img.top + Math.abs(k);\n        }\n\n        return img.style.top = img.top + \'px\';\n    }\n<\/script>\n\n</html>\n')])])]),e("h1",{attrs:{id:"全局存储变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局存储变量"}},[t._v("#")]),t._v(" 全局存储变量")]),t._v(" "),e("ul",[e("li",[t._v("存")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("localStorage.setItem('存储的名字', 要存的数据)\n")])])]),e("ul",[e("li",[t._v("取")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var xxx - localStorage.存储的名字\n")])])]),e("h1",{attrs:{id:"数组里按时间排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组里按时间排序"}},[t._v("#")]),t._v(" 数组里按时间排序")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("把数组里的时间参数转化成值")]),t._v(" "),e("p",[t._v("temp.sorttime = new Date(tempList[i].createTime).getTime();")])]),t._v(" "),e("li",[e("p",[t._v("对数组里的值进行排序")]),t._v(" "),e("p",[t._v('list.sort(this.compare("sorttime"));')])]),t._v(" "),e("li",[e("p",[t._v("compare方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("compare(property) {\n      return function (a, b) {\n        var value1 = a[property];\n        var value2 = b[property];\n        return value2 - value1;\n      };\n    }\n")])])])])]),t._v(" "),e("h1",{attrs:{id:"不同分辨率动态赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同分辨率动态赋值"}},[t._v("#")]),t._v(" 不同分辨率动态赋值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('if (window.innerWidth > 1440) {\n\tthis.dialogwidth = "27.5%";\n} else {\n\tthis.dialogwidth = "37%";\n}\n\ndialogwidth:""\n')])])]),e("h1",{attrs:{id:"table批量删除选中行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table批量删除选中行"}},[t._v("#")]),t._v(" table批量删除选中行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let rows = this.$refs.tableRefName.getSelectAllRows();\nlet ids = [];\nrows.forEach(item => ids.push(item.id));\napi.delete(ids,response=>{})\n")])])]),e("h1",{attrs:{id:"获取当前时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取当前时间"}},[t._v("#")]),t._v(" 获取当前时间")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('getCurrentDate () {\n    var date = new Date();\n    var year = date.getFullYear();\n    var month = date.getMonth() + 1;\n    var day = date.getDate();\n    var hour = date.getHours();\n    var minute = date.getMinutes();\n    var second = date.getSeconds();\n    if (month < 10) {\n    \tmonth = "0" + month;\n    }\n    if (day < 10) {\n    \tday = "0" + day;\n    }\n    if (hour < 10) {\n    \thour = "0" + hour;\n    }\n    if (minute < 10) {\n    \tminute = "0" + minute;\n    }\n    if (second < 10) {\n    \tsecond = "0" + second;\n    }\n    var nowDate =\n    year +\n    "-" +\n    month +\n    "-" +\n    day +\n    " " +\n    hour +\n    ":" +\n    minute +\n    ":" +\n    second;\n    return nowDate;\n}\n')])])]),e("ul",[e("li",[t._v("明天")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('var tomrrowDay = new Date(\n        new Date().setDate(new Date().getDate() + 1)\n      ).format("yyyy-MM-dd 00:00:00");\n      \n')])])]),e("h1",{attrs:{id:"object对象取key和value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object对象取key和value"}},[t._v("#")]),t._v(" object对象取key和value")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("licenseN = Object.keys(row.action.licenseNumberMap);\n\t\t\t\t\t\tstatusN = Object.values(row.action.licenseNumberMap);\n")])])]),e("h1",{attrs:{id:"去重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[t._v("#")]),t._v(" 去重")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("listUnique(array) {\n      var r = [];\n      for (var i = 0, l = array.length; i < l; i++) {\n        for (var j = i + 1; j < l; j++)\n          if (JSON.stringify(array[i]) == JSON.stringify(array[j])) j = ++i;\n        r.push(array[i]);\n      }\n      return r;\n    }\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("unique(arr) {\n      var hash = [];\n      for (var i = 0; i < arr.length; i++) {\n        if (hash.indexOf(arr[i]) == -1) {\n          hash.push(arr[i]);\n        }\n      }\n      return hash;\n    }\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);