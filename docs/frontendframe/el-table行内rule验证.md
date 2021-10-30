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

