介绍
ECharts
缩写来自Enterprise Charts,商业级数据图表,是百度的一个开源的数据可视化工具,一个纯Javascript的图表库
使用步骤
进入官网https://www.echartsjs.com/zh/index.html
选择定制下载，选择需要的组件下载对应的echarts.min.js
进入官方实例，找到自己想要的图，先在网页上进行修改
查看配置项手册，找到自己想要改的内容
配置项简介
avatar
一般格式：

   var myChart = echarts.init(document.getElementById('组件id'));
var option={};
myChart.clear();
myChart.setOption(option);


myChart.off("click");
    myChart.on("click", function(params) {
    if (params.componentType == "series") {
    }
});

实例网站：https://gallery.echartsjs.com/explore.html#charts=bar~sort=rank~timeframe=all~author=all