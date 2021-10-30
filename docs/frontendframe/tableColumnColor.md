# table中列值动态赋样式

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

