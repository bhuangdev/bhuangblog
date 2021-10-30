# 导入导出

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



