(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{527:function(r,a,t){"use strict";t.r(a);var s=t(70),n=Object(s.a)({},(function(){var r=this.$createElement,a=this._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h1",{attrs:{id:"去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[this._v("#")]),this._v(" 去重")]),this._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("listUnique(array) {\n      var r = [];\n      for (var i = 0, l = array.length; i < l; i++) {\n        for (var j = i + 1; j < l; j++)\n          if (JSON.stringify(array[i]) == JSON.stringify(array[j])) j = ++i;\n        r.push(array[i]);\n      }\n      return r;\n    }\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("unique(arr) {\n      var hash = [];\n      for (var i = 0; i < arr.length; i++) {\n        if (hash.indexOf(arr[i]) == -1) {\n          hash.push(arr[i]);\n        }\n      }\n      return hash;\n    }\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);