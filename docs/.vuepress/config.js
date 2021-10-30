module.exports = {
    title: 'Bin\'s blog',
    description: '个人学习记录',
    head:[
        ['link',{rel:'icon',href:'/logo.png'}],
    ],
    markdown:{
        lineNumbers:false
    },
    themeConfig:{
        logo:'/logo.png',
        nav:[
            { text:'首页', link:'/'},
            { 
                text:'前端基础', 
                items:[
                    { text:'滚动条与图片移动',link:'/frontendbase/滚动条与图片移动'},
                    { text:'全局存储变量',link:'/frontendbase/全局存储变量'},
                    { text:'数组里按时间排序',link:'/frontendbase/数组里按时间排序'},
                    { text:'adaptWidth',link:'/frontendbase/adaptWidth'},
                    { text:'batchDeleteTableSelectNode',link:'/frontendbase/batchDeleteTableSelectNode'},
                    { text:'getCurrentDate',link:'/frontendbase/getCurrentDate'},
                    { text:'object',link:'/frontendbase/object'},
                    { text:'unique',link:'/frontendbase/unique'},
                ]
            },
            { 
                text:'前端框架',
                items:[
                    { text:'手撕vue源码',link:'/frontendframe/手撕vue源码'},
                    { text:'changeComponent',link:'/frontendframe/changeComponent'},
                    { text:'tableColumnColor',link:'/frontendframe/tableColumnColor'},
                    { text:'components',link:'/frontendframe/components'},
                    { text:'createElement',link:'/frontendframe/createElement'},
                    { text:'date-time-picker',link:'/frontendframe/date-time-picker'},
                    { text:'drags',link:'/frontendframe/drags'},
                    { text:'editOradd',link:'/frontendframe/editOradd'},
                    { text:'el-date-picker',link:'/frontendframe/el-date-picker'},
                    { text:'el-table分页',link:'/frontendframe/el-table分页'},
                    { text:'el-table行内rule验证',link:'/frontendframe/el-table行内rule验证'},
                    { text:'forEach+filter',link:'/frontendframe/forEach+filter'},
                    { text:'fullEditer',link:'/frontendframe/fullEditer'},
                    { text:'hackRest',link:'/frontendframe/hackRest'},
                    { text:'import-export',link:'/frontendframe/import-export'},
                    { text:'match+join',link:'/frontendframe/match+join'},
                ]
            },
            { 
                text:'其他',
                items:[
                    { text:'常用调试工具和抓包工具',link:'/others/常用调试工具和抓包工具'},
                    { text:'W3C学习',link:'/others/W3C学习'},
                ]
            },
            { 
                text:'实践总结', 
                items:[
                    { text:'待更新',link:'/practice/blank'},
                ]
            },
            { text:'关于我', link:'/about/'},
            { text:'GitHub', link:'https://github.com/bhuangdev'},
        ],
        sidebar:'auto',
    }
};