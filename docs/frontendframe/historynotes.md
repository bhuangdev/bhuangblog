# 历史前端框架笔记

## 动态切换组件

https://blog.csdn.net/liangmengbk/article/details/85013547


## vue页面组件化-父子组件传值

> 页面组件化涉及到父子组件传值的问题，需要用到props和emit

- 父组件引

```
 <Dialog
 	:dialogVisible="visible"   //需要向子组件传值的属性
 	:title="title"
	:width="width"
 	@changeVisible="changeV"   //子组件向父组件传值及操作的途径方法
 />
```

```
import Dialog from "@/newsModules/noticeDialog";
```

```
components: {
	Dialog
}
```

```
data里
visible：false,
title:"",
width:""
```

```
changeV(e) {
	this.visible = e;    //e是从子组件传过来的值
	this.getNoticeData(); //子组件传值的同时调用父组件的初始化方法来刷新父组件的值
}
```

- 子组件定义

```
balabala(组件代码)
```

```
props: {    //用props定义需要从父组件接收值的变量
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
}
```

```
handleClose() {
	this.$emit("changeVisible", false);  //把false作为值传给changeVisible方法
}
```

## table组件 写columns 属性时render自定义内容

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



## 日期组件

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


## drags

https://blog.csdn.net/weixin_41910848/article/details/82218243


## 添加和更新调同一个组件时的判断

```
if (this.title == "添加") {
    this.addItems();
    this.$nextTick(() => {
    	this.dialogClose();
    });
} else {
    this.editItems();
    this.$nextTick(() => {
    	this.dialogClose();
    });
}
```

```
dialogClose() {
    this.$emit("changeVisible", false);  //关闭
    this.$emit("changeData");			 //刷新
}
```

## el-date-picker

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




## el-table分页

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

## el-table 行内加form rule验证

```
<el-table-column :label="SCORE" align="center">
              <template slot-scope="scope">
                <el-form :model="scope.row" :rules="scoreRules" ref="scoreRef" z-index="999">
                  <el-form-item prop="aScore">
                    <td-input
                      v-model="scope.row.aScore"
                      id="scoreInput"
                      style="width:100px !important;"
                    ></td-input>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
```


## forEach filter

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




## 富文本编辑器

- 用

```
<Editor v-model="noticeContent" />
```

- 引

```
import Editor from '@/components/Editor';
components: {
	Editor
}
noticeContent:""
```

- 源

```
<template>
  <div>
    <!-- 图片上传组件辅助 -->
    <el-upload
      class="avatar-uploader quill-img"
      :action="uploadImgUrl"
      name="file"
      :headers="headers"
      :show-file-list="false"
      :on-success="quillImgSuccess"
      :on-error="uploadError"
      :before-upload="quillImgBefore"
      accept=".jpg, .jpeg, .png, .gif"
    ></el-upload>

    <!-- 富文本组件 -->
    <quill-editor
      class="editor"
      v-model="content"
      ref="quillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";

// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
  ["blockquote", "code-block"], // 引用  代码块
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ align: [] }], // 对齐方式
  ["clean"], // 清除文本格式
  ["link", "image", "video"], // 链接、图片、视频
];

import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  props: {
    /* 编辑器的内容 */
    value: {
      type: String,
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 4000, //kb
    },
  },
  components: { quillEditor },
  data() {
    return {
      content: this.value,
      uploadImgUrl: "",
      editorOption: {
        placeholder: "",
        theme: "snow", // or 'bubble'
        placeholder: "请输入内容",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
      uploadImgUrl: process.env.VUE_APP_BASE_API + "/common/upload", // 上传的图片服务器地址（这个地方注意）
      headers: {
        Authorization: "Bearer " + getToken(),（这个地方注意）
      },
    };
  },
  watch: {
    value: function () {
      this.content = this.value;
    },
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
      this.$emit("input", this.content);
    },

    // 富文本图片上传前
    quillImgBefore(file) {
      let fileType = file.type;
      if (fileType === "image/jpeg" || fileType === "image/png") {
        return true;
      } else {
        this.$message.error("请插入图片类型文件(jpg/jpeg/png)");
        return false;
      }
    },

    quillImgSuccess(res, file) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.quillEditor.quill;
      // 如果上传成功
      if (res.code == 200) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.url为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.url);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 富文本图片上传失败
    uploadError() {
      // loading动画消失
      this.$message.error("图片插入失败");
    },
  },
};
</script> 

<style>
.editor {
  line-height: normal !important;
  height: 692px;
}
.quill-img {
  display: none;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>
```



## 组件强制刷新技巧

>  在实际开发过程中经常会遇到动态取值之后vue组件不能刷新的问题，解决办法就是利用v-if，改变状态，强制刷新

- 在要刷新的组件上定义v-if="hackReset"

```
v-if="hackReset"
```

- data里定义变量

```
hackReset: true
```

- 在需要刷新的位置加上刷新代码

```
this.hackReset = false;
this.$nextTick(() => {
	this.hackReset = true;
});
```



## 导入导出

- 导出

```
<el-button type="primary" @click="btnExport">导出</el-button>

btnExport() {
      let queryParam = {};
      api.exportData(queryParam, response => {
        if (response.data.statusMessage === "-1") {
          this.$message({
            showClose: true,
            message: "导出失败",
            type: "error"
          });
          return;
        }
        this.doDownload(response.request.responseURL);
        this.$message({
          showClose: true,
          message: "导出成功！",
          type: "success"
        });
      });
    },
    doDownload(src) {
      var a = document.createElement("a");
      a.href = src;
      document.body.appendChild(a);
      a.click();
    }
```

- 导入

```
<el-button type="primary" @click="btnImport">导入</el-button>
```

```
btnImport() {
	this.importVisible = true
}
```

```
<template>
  <div>
    <td-dialog
      :visible="importVisible"
      v-dialogDrag
      :title="IMPORT"
      width="25%"
      :before-close="importDialogClose"
    >
      <el-row>
        <el-col :span="16" style="margin-top:10px;margin-bottom:5px;">
          <td-button type="primary" @click="chooseFile">{{SELECTFILE}}</td-button>
          <td-button @click="upLoadFile">{{UPLOADFILE}}</td-button>
        </el-col>
        <el-col style="margin-bottom:30px;">
          <span style="font-size:10px;">{{ONLIEXCEL}}</span>
        </el-col>
        <el-col style="margin-bottom:30px;text-align:center">
          <span style="font-size:14px; color:#666">{{uploadFileName}}</span>
          <td-button
            @click="removeFile"
            type="text"
            size="small"
            v-show="uploadFileName != ''"
            style="font-size:14px; color:#000; padding-left: 30px"
          >{{DELFILE}}</td-button>
          <input type="file" id="btn_file" style="display:none" accept=".xls" ref="btnFile" />
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <td-button @click="importTemplate">{{IMPORTMODELDOWNLOAD}}</td-button>
        <td-button @click="importCancel">{{CANCEL}}</td-button>
      </span>
    </td-dialog>
  </div>
</template>

<script>
import api from "@/assets/api";
export default {
  props: {
    importVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      IMPORT: this.$t("sightWordImportDialog.IMPORT"),
      SELECTFILE: this.$t("sightWordImportDialog.SELECTFILE"),
      UPLOADFILE: this.$t("sightWordImportDialog.UPLOADFILE"),
      ONLIEXCEL: this.$t("sightWordImportDialog.ONLIEXCEL"),
      DELFILE: this.$t("sightWordImportDialog.DELFILE"),
      IMPORTMODELDOWNLOAD: this.$t("sightWordImportDialog.IMPORTMODELDOWNLOAD"),
      CANCEL: this.$t("sightWordImportDialog.CANCEL"),
      uploadFileName: ""
    };
  },
  methods: {
    importDialogClose() {
      this.$emit("importDialogClose");
    },
    importTemplate() {
      let aTag = document.createElement("a");
      aTag.href =
        "http://192.168.96.44:7000/mclz/filemanagement/sightWordTemplate.xls";
      document.body.appendChild(aTag);
      aTag.click();
    },
    chooseFile() {
      let _this = this;
      let btnImport = this.$refs.btnFile;
      btnImport.click();
      btnImport.onchange = function() {
        _this.importData(btnImport.files);
      };
    },
    importData(files) {
      if (files.length > 0) {
        let fileName = files[files.length - 1].name;
        if (fileName.indexOf(".xls", fileName.length - ".xls".length) === -1) {
          this.$message.error({
            showClose: true,
            message: $t("sightWordImportDialog.EILEMESSAGEERROR")
          });
          this.$refs.btnFile.value = "";
          return;
        } else {
          if (files[files.length - 1].size / 1024 / 1024 > 300) {
            this.$message.error({
              showClose: true,
              message: $t("sightWordImportDialog.FILESIZELESS300M")
            });
            this.$refs.btnFile.value = "";
            return;
          }
          this.uploadFileName = fileName;
        }
      }
    },
    upLoadFile() {
      let files = this.$refs.btnFile.files;
      if (files.length === 0) {
        this.$message.error({
          showClose: true,
          message: $t("sightWordImportDialog.FILESIZELESS300M")
        });
        this.$refs.btnFile.value = "";
        return;
      }
      let header = {};
      let params = new FormData();
      params.append("file", this.$refs.btnFile.files[files.length - 1]);
      api.importData(params, response => {
        if (response.data.statusCode === "API-COMMON-INF-OK") {
          this.$message({
            showClose: true,
            message: $t("sightWordImportDialog.FILESIZELESS300M"),
            type: "success"
          });
          this.importDialogClose();
        } else {
          this.$message({
            showClose: true,
            message: $t("sightWordImportDialog.FILESIZELESS300M"),
            type: "error"
          });
        }
        this.$refs.btnFile.value = "";
        this.uploadFileName = "";
      });
    },
    removeFile() {
      this.$refs.btnFile.value = "";
      this.uploadFileName = "";
    },
    importCancel() {
      this.importDialogClose();
    }
  }
};
</script>

<style>
</style>
```



## 匹配拼接

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


## table中列值动态赋样式

- 根据每一列alert0show,alert1show,alert3show的值来确定显示哪个图标
- 根据每一列patrolAlarm的值来设定文字的样式  （动态赋class,class里定义样式）

```
 <el-table-column prop="patrolAlarm"  width="148" align="center">
     <template slot-scope="scope">
     <i class="el-icon-success" v-show="scope.row.alert0show" style="color:#7E9913"></i>
     <i class="el-icon-warning" v-show="scope.row.alert1show" style="color:#FA4F4F"></i>
     <i class="el-icon-time" v-show="scope.row.alert3show" style="color:#7E9913"></i>&nbsp;
     <span
     :class="((scope.row.patrolAlarm === '1') || (scope.row.patrolAlarm === '4') || (scope.row.patrolAlarm === '5')) ? 'redColor':'greenColor'"
     >{{scope.row.sAlertType}}</span>
     </template>
 </el-table-column>
```



