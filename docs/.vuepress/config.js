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
                    { text:'历史笔记',link:'/frontendbase/historynotes'},
                    { text:'重学前端',link:'/frontendbase/重学前端'},
                    { text:'待更新',link:'/frontendbase/blank'},
                ]
            },
            { 
                text:'前端框架',
                items:[
                    { text:'历史笔记',link:'/frontendframe/historynotes'},
                    { text:'手撕vue源码系列',link:'/frontendframe/手撕vue源码-01'},
                    { text:'VUE开发实践笔记',link:'/frontendframe/VUE开发实践笔记'},
                    { text:'待更新',link:'/frontendframe/blank'},
                ]
            },
            { 
                text:'其他',
                items:[
                    { text:'常用调试工具和抓包工具',link:'/others/常用调试工具和抓包工具'},
                    { text:'W3C学习',link:'/others/W3C学习'},
                    { text:'CSharp笔记',link:'/others/CSharp笔记'},
                    { text:'echarts',link:'/others/echarts'},
                    { text:'dojo&兼容问题',link:'/others/dojo&兼容问题'},
                    { text:'http网络请求状态码',link:'/others/http网络请求状态码'},
                    { text:'SqlServer',link:'/others/SqlServer'},
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
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
};