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
                    { text:'historynotes',link:'/frontendbase/historynotes'},
                    { text:'待更新',link:'/frontendbase/blank'},
                ]
            },
            { 
                text:'前端框架',
                items:[
                    { text:'手撕vue源码-01',link:'/frontendframe/手撕vue源码-01'},
                    { text:'historynotes',link:'/frontendframe/historynotes'},
                    { text:'待更新',link:'/frontendframe/blank'},
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