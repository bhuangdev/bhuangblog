(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{542:function(t,e,n){"use strict";n.r(e);var s=n(70),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"导入导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入导出"}},[t._v("#")]),t._v(" 导入导出")]),t._v(" "),n("ul",[n("li",[t._v("导出")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<el-button type="primary" @click="btnExport">导出</el-button>\n\nbtnExport() {\n      let queryParam = {};\n      api.exportData(queryParam, response => {\n        if (response.data.statusMessage === "-1") {\n          this.$message({\n            showClose: true,\n            message: "导出失败",\n            type: "error"\n          });\n          return;\n        }\n        this.doDownload(response.request.responseURL);\n        this.$message({\n          showClose: true,\n          message: "导出成功！",\n          type: "success"\n        });\n      });\n    },\n    doDownload(src) {\n      var a = document.createElement("a");\n      a.href = src;\n      document.body.appendChild(a);\n      a.click();\n    }\n')])])]),n("ul",[n("li",[t._v("导入")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<el-button type="primary" @click="btnImport">导入</el-button>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("btnImport() {\n\tthis.importVisible = true\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  <div>\n    <td-dialog\n      :visible="importVisible"\n      v-dialogDrag\n      :title="IMPORT"\n      width="25%"\n      :before-close="importDialogClose"\n    >\n      <el-row>\n        <el-col :span="16" style="margin-top:10px;margin-bottom:5px;">\n          <td-button type="primary" @click="chooseFile">{{SELECTFILE}}</td-button>\n          <td-button @click="upLoadFile">{{UPLOADFILE}}</td-button>\n        </el-col>\n        <el-col style="margin-bottom:30px;">\n          <span style="font-size:10px;">{{ONLIEXCEL}}</span>\n        </el-col>\n        <el-col style="margin-bottom:30px;text-align:center">\n          <span style="font-size:14px; color:#666">{{uploadFileName}}</span>\n          <td-button\n            @click="removeFile"\n            type="text"\n            size="small"\n            v-show="uploadFileName != \'\'"\n            style="font-size:14px; color:#000; padding-left: 30px"\n          >{{DELFILE}}</td-button>\n          <input type="file" id="btn_file" style="display:none" accept=".xls" ref="btnFile" />\n        </el-col>\n      </el-row>\n      <span slot="footer" class="dialog-footer">\n        <td-button @click="importTemplate">{{IMPORTMODELDOWNLOAD}}</td-button>\n        <td-button @click="importCancel">{{CANCEL}}</td-button>\n      </span>\n    </td-dialog>\n  </div>\n</template>\n\n<script>\nimport api from "@/assets/api";\nexport default {\n  props: {\n    importVisible: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      IMPORT: this.$t("sightWordImportDialog.IMPORT"),\n      SELECTFILE: this.$t("sightWordImportDialog.SELECTFILE"),\n      UPLOADFILE: this.$t("sightWordImportDialog.UPLOADFILE"),\n      ONLIEXCEL: this.$t("sightWordImportDialog.ONLIEXCEL"),\n      DELFILE: this.$t("sightWordImportDialog.DELFILE"),\n      IMPORTMODELDOWNLOAD: this.$t("sightWordImportDialog.IMPORTMODELDOWNLOAD"),\n      CANCEL: this.$t("sightWordImportDialog.CANCEL"),\n      uploadFileName: ""\n    };\n  },\n  methods: {\n    importDialogClose() {\n      this.$emit("importDialogClose");\n    },\n    importTemplate() {\n      let aTag = document.createElement("a");\n      aTag.href =\n        "http://192.168.96.44:7000/mclz/filemanagement/sightWordTemplate.xls";\n      document.body.appendChild(aTag);\n      aTag.click();\n    },\n    chooseFile() {\n      let _this = this;\n      let btnImport = this.$refs.btnFile;\n      btnImport.click();\n      btnImport.onchange = function() {\n        _this.importData(btnImport.files);\n      };\n    },\n    importData(files) {\n      if (files.length > 0) {\n        let fileName = files[files.length - 1].name;\n        if (fileName.indexOf(".xls", fileName.length - ".xls".length) === -1) {\n          this.$message.error({\n            showClose: true,\n            message: $t("sightWordImportDialog.EILEMESSAGEERROR")\n          });\n          this.$refs.btnFile.value = "";\n          return;\n        } else {\n          if (files[files.length - 1].size / 1024 / 1024 > 300) {\n            this.$message.error({\n              showClose: true,\n              message: $t("sightWordImportDialog.FILESIZELESS300M")\n            });\n            this.$refs.btnFile.value = "";\n            return;\n          }\n          this.uploadFileName = fileName;\n        }\n      }\n    },\n    upLoadFile() {\n      let files = this.$refs.btnFile.files;\n      if (files.length === 0) {\n        this.$message.error({\n          showClose: true,\n          message: $t("sightWordImportDialog.FILESIZELESS300M")\n        });\n        this.$refs.btnFile.value = "";\n        return;\n      }\n      let header = {};\n      let params = new FormData();\n      params.append("file", this.$refs.btnFile.files[files.length - 1]);\n      api.importData(params, response => {\n        if (response.data.statusCode === "API-COMMON-INF-OK") {\n          this.$message({\n            showClose: true,\n            message: $t("sightWordImportDialog.FILESIZELESS300M"),\n            type: "success"\n          });\n          this.importDialogClose();\n        } else {\n          this.$message({\n            showClose: true,\n            message: $t("sightWordImportDialog.FILESIZELESS300M"),\n            type: "error"\n          });\n        }\n        this.$refs.btnFile.value = "";\n        this.uploadFileName = "";\n      });\n    },\n    removeFile() {\n      this.$refs.btnFile.value = "";\n      this.uploadFileName = "";\n    },\n    importCancel() {\n      this.importDialogClose();\n    }\n  }\n};\n<\/script>\n\n<style>\n</style>\n')])])])])}),[],!1,null,null,null);e.default=l.exports}}]);