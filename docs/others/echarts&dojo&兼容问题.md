# echarts,dojo和兼容问题

## echarts图表的使用
https://www.echartsjs.com/en/option.html#title

## dojo （connect hitch xhrPost） 
https://dojotoolkit.org/documentation/tutorials/1.10/hello_dojo/

## div+css布局
分块浮动，大的：margin:0 padding:0 position:absolute 
		小的：float：left

## 1960向1440兼容的方法（响应式布局）
主要是样式的问题，解决办法就是在css上加上media监听事件
@media screen and (max-width:1920px){}
@media screen and (max-width:1440px){}
分辨率大的放在前头

## ie11向ie8兼容的方法
echarts把引用的js改成了定制生成时支持ie8的版本
剩下的三个问题：
（1）图表on点击事件无效
	Javascript 中, 函数不与定义它们的上下文即作用域绑定
	在myChart.on('onclick',function(params){})中加入hitch
	即myChart.on('onclick',dojo.hitch(this,function(params){}))
（2）样式没加载进来，后来发现是因为ie8不支持@media事件
	引入一个respond.min.js
	注意：①要在css后引用
		  ②media格式必须是 @media screen and (max-width:1440px)
（3）图表会覆盖弹出框
	将图表页面的z-index设为1即阻止覆盖
	

## attachEvent与addEventListener
ie8不支持addEventListener
ie11不支持attachEvent
所以在在使用监听事件的时候需要加一个判断
if(window.attachEvent){
	bt1.attachEvent('on'+"click",function(){……});  //两个参数
}
else if(window.addEventListener){
	bt1.addEventListener("click",function(){……},false);  //三个参数
}


