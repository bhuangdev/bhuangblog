(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{544:function(l,e,s){"use strict";s.r(e);var t=s(70),o=Object(t.a)({},(function(){var l=this,e=l.$createElement,s=l._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("h1",{attrs:{id:"table中列值动态赋样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table中列值动态赋样式"}},[l._v("#")]),l._v(" table中列值动态赋样式")]),l._v(" "),s("ul",[s("li",[l._v("根据每一列alert0show,alert1show,alert3show的值来确定显示哪个图标")]),l._v(" "),s("li",[l._v("根据每一列patrolAlarm的值来设定文字的样式  （动态赋class,class里定义样式）")])]),l._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v(' <el-table-column prop="patrolAlarm"  width="148" align="center">\n     <template slot-scope="scope">\n     <i class="el-icon-success" v-show="scope.row.alert0show" style="color:#7E9913"></i>\n     <i class="el-icon-warning" v-show="scope.row.alert1show" style="color:#FA4F4F"></i>\n     <i class="el-icon-time" v-show="scope.row.alert3show" style="color:#7E9913"></i>&nbsp;\n     <span\n     :class="((scope.row.patrolAlarm === \'1\') || (scope.row.patrolAlarm === \'4\') || (scope.row.patrolAlarm === \'5\')) ? \'redColor\':\'greenColor\'"\n     >{{scope.row.sAlertType}}</span>\n     </template>\n </el-table-column>\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);