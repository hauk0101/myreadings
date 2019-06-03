# 读书笔记
###### 阅读者:hauk0101
## 简介
书名：《锋利的jQuery》（第2版）<br>
作者：单东林  &nbsp;  张晓菲  &nbsp;  魏然 <br>
出版发行：人民邮电出版社 <br>
出版时间：2012年7月

## 总结 (Chapter4-Chapter6)
### 第4章 jQuery 中的事件和动画
本章主要是介绍了jQuery的常用事件和动画效果的使用方法。
>jQuery 中的事件

* 加载DOM，window.onload 方法与 $(document).ready() 方法的关系
	* window.onload 为 JavaScript 原生方法，而且必须等待网页全部加载完毕（包括图片等），然后再执行JS代码
	* window.onload 多次调用会被覆盖， $(document).ready() 多次调用不会被覆盖，每次都会执行
	*  $(document).ready() 为 jQuery 封装后的方法
		* 在非 IE 浏览器中，是通过监听 document.addEventListener( "DOMContentLoaded" ,loadedHandle,false) 实现
		* 在 IE 浏览器中，是通过 document.documentElement.doScroll("left") 的方法去滚动页面，如果没加载完就等个50毫秒后继续滚，直到滚的动后就触发ready。但是，如果页面中有frame的场合，会使用window.onload事件作为ready的触发源。
		* 所以在IE下，页面中有frame时，ready也是等到页面内的所有内容加载完成后再触发。
* 事件冒泡
	* 当元素有嵌套时，分别对嵌套的元素添加事件，则会从子元素依次向包裹它的父元素逐个触发相关事件，由小到大的响应过程，可以看做是水里的冒泡效果。
	* 停止事件冒泡可以组织事件中其他对象的事件处理函数被执行，在 jQuery 中提供了 stopPropagation() 方法来停止冒泡。
	* 组织默认行为，在 jQuery 中提供了 preventDefault() 方法来阻止元素的默认行为。
	* 如果想同时对事件对象停止冒泡和默认行为，可以在事件处理函数中返回 false，这是对在事件对象上同时调用 stopPrapagation() 方法和 preventDefault() 方法的一种简写方式。	
* 事件捕获

>jQuery 中的动画

* 动画方法概括

| 方法名 | 说明 | 
|:----------:|:-----------------------------|
| hide() 和 show()  | 同时修改多个样式属性即高度、宽度和不透明度 |
| fadeIn() 和 fadeOut()   | 只改变不透明度       | 
| slideUp() 和 slideDown()    | 只改变高度 | 
| fadeTo()  | 只改变不透明度   | 
| toggle()  | 用来代替 hide() 方法和 show() 方法，所以会同时修改多个样式属性，即高度、宽度和不透明度 |        
| slideToggle()    | 用来代替 slideUp() 方法和 slideDown() 方法，所以只能改变高度   |
| fadeToggle() | 用来代替 fadeIn() 方法和 fadeOut() 方法，所以只能改变不透明度| 
| animate() | 属于自定义动画的方法，以上各种动画方法实质内部都调用了 animate() 方法。此外，直接使用 animate() 方法还能自定义其他的样式属性，例如：left、marginLeft、scrollTop 等|

