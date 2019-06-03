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
>1.jQuery 中的事件

* 加载DOM，window.onload 方法与 $(document).ready() 方法的关系
	* window.onload 为 JavaScript 原生
	
* 强大的选择器。
* 出色的DOM操作的封装。
* 可靠的事件处理机制。
* 完善的Ajax。
* 不污染顶级变量。
* 出色的浏览器兼容性。
* 链式操作方式。
* 隐式迭代。
* 行为层与结构层的分离。
* 丰富的插件支持。
* 完善的文档。
* 开源。

>2.DOM对象和jQuery对象的相互转换。

* jQuery对象转成DOM对象。
	* jQuery对象时一个类似数组的对象，可以通过[index]的方法得到相应的DOM对象。
			
			var $cr = $("#cr");		//jQuery对象
			var cr = $cr[0];		//DOM对象
	* 另一种方法是jQuery本身提供的，通过get(index)方法得到相应的DOM对象。

			var $cr = $("#cr");		//jQuery对象
			var cr = $cr.get(0);		//DOM对象
* DOM对象转化成jQuery对象。对于一个DOM对象，只需要用$()把DOM对象包装起来，就可以获得一个jQuery对象。

		var cr = document.getElementById("cr");		//DOM对象
		var $cr = $(cr);					//jQuery对象

### 第2章 jQuery选择器
  选择器是jQuery的根基，在jQuery中，对事件处理、遍历DOM和Ajax操作都依赖于选择器。

> 1.CSS选择器。常用的CSS选择器分类如下表所示：

| 选择器 | 语法 | 描述 | 示例 |
|:----------:|:-----------------------------|:------------------------------:|:------------------------------------------------|
| 标签选择器  | E {<br>CSS规则<br> }          | 以文档元素作为选择符              | a{<br>text-decoration:none;<br>}                |
| ID选择器   | #ID{<br> CSS规则 <br>}         | 以文档元素的唯一标识符ID作为选择符 | #note{<br> font-size:14px;<br>width:120px;<br>} |
| 类选择器    | E.className{<br>CSS规则<br>}  | 以文档元素的class作为选择符       | .dream{<br> font-size:14px;<br>}                |
| 群组选择器  | E1,E2,E3,{<br>CSS规则<br>}    | 多个选择符应用同样的样式规则       | td,p,div,a{<br> font-size:14px; <br> }          |
| 后代选择器  | E F{<br>CSS规则<br>}          | 元素E的任意后代元素F              | #link a {<br>color:red;<br>}                    |
| 通选择器    | * {<br>CSS规则<br>}           | 以文档的所有元素作为选择符         | * {<br>font-size:14px;<br>}                    |

> 2.jQuery选择器的优势。

* 简洁的写法。
* 支持CSS1到CSS3选择器。
* 完善的处理机制。即使没有对应的元素，运行时并不会报错。

> 3.jQuery选择器。

* 基本选择器。

	| 选择器 | 描述 | 返回 | 示例 |
	|-------|------| --- | ---- |
	| #id | 根据给定的id匹配一个元素 | 单个元素 | $("#test")选取id为test的元素 |
	| .class | 根据给定的类名匹配元素 | 集合元素 | $(".test")选取所有class为test的元素 |
	| element | 根据给定的元素名匹配元素 | 集合元素 | $(p)选取所有的\<p\>元素 |
	| * | 匹配所有元素 | 集合元素 | $("*")选取所有的元素 |
	| selector1,selector2,...,selectorN | 将每一个选择器匹配到的元素合并后一起返回 | 集合元素 | $("div,span,p.myClass")选取所有\<div\>,\<span\>和拥有class为myClass的\<p\>标签的一组元素 |

* 层次选择器。

	| 选择器 | 描述 | 返回 | 示例 |
	| ------ | ---- | ---- | --- |
	| $("ancestor descendant") | 选取ancestor 元素里的所有descendant(后代)元素 | 集合元素 | $("div span")选取\<div\>里的所有的\<span\>元素 |
	| $("parent>child") | 选取parent 元素下的child(子)元素，与$("ancestor descendant")有区别，$("ancestor descendant")选择的是后代元素 | 集合元素 | $("div>span")选取\<div\>元素下元素名是\<span\>的子元素 |
	| $("prev+next") | 选取紧接在prev元素后的next元素 | 集合元素 | $(".one+div")选取class为one的下一个\<div\>同辈元素 |
	| $("prev\~siblings") | 选取prev元素之后的所有siblings元素 | 集合元素 | $("#two~div")选取id为two的元素后面的所有\<div\>同辈元素 |

* 基本过滤选择器。

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :first | 选取第1个元素 | 单个元素 | $("div:first")选取所有\<div\>元素中第1个\<div\>元素 |
	| :last | 选取最后一个元素 | 单个元素 | $("div:last")选取所有\<div\>元素中最后一个\<div\>元素 |
	| :not(selector) | 去除所有与给定选择器匹配的元素 | 集合元素 | $("input:not(.myClass)")选取class不是myClass的\<input\>元素|
	| :even | 选取索引是偶数的所有元素，索引从0开始 | 集合元素 | $("input:even")选取索引是偶数的\<input\>元素 |
	| :odd | 选取索引是奇数的所有元素，索引从0开始 | 集合元素 | $("input:odd")选取索引是奇数的\<input\>元素 |
	| :eq(index) | 选取索引等于index的元素（index从0开始） | 单个元素 | $("input:eq(1)")选取索引等于1的\<input\>元素 |
	| :gt(index) | 选取索引大于index的元素 | 集合元素 | $("input:gt(1)")选取索引大于1的\<input\>元素（注：大于1，而不包括1） |
	| :lt(index) | 选取索引小于index的元素 | 集合元素 | $("input:lt(1)")选取索引小于1的\<input\>元素（注：小于1，而不包括1） |
	| :header | 选取所有的标题元素，例如h1,h2,h3等等 | 集合元素 | $(":header")选取网页中所有的\<h1\>,\<h2\>,\<h3\>,... |
	| :animated | 选取当前正在执行动画的所有元素 | 集合元素 | $("div:animated")选取正在执行动画的\<div\>元素 |
	| :focus | 选取当前获取焦点的元素 | 集合元素 | $(":focus")选取当前获取焦点的元素 |

* 内容过滤选择器

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :contains(next) | 选取含有文本内容为"text"的元素 | 集合元素 | $("div:contains('我')")选取含有文本"我"的\<div\>元素 |
	| :empty | 选取不包含子元素或者文本的空元素 | 集合元素 | $("div:empty")选取不包含子元素(包括文本元素)的\<div\>元素 |
	| :has(selector) | 选取含有选择器所匹配的元素的元素 | 集合元素 | $("div:has(p)")选取含有\<p\>元素的\<div\>元素 |
	| :parent | 选取含有子元素或者文本的元素 | 集合元素 | $("div:parent")选取拥有子元素(包括文本元素)的\<div\>元素 |

* 可见性过滤选择器

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :hidden | 选取所有不可见的元素 | 集合元素 | $(":hidden")选取所有不可见的元素。包括\<input type="hidden" /\>,\<div style="display:none;"\>和\<div style="visibility:hidden;"\>等元素。如果只想选取\<input\>元素，可以使用$("input:hidden") |
	| :visible | 选取所有可见的元素 | 集合元素 | $("div:visible")选取所有可见的\<div\>元素 |

* 属性过滤选择器

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| [attribute] | 选取拥有此属性的元素 | 集合元素 | $("div[id]")选取拥有属性id的元素 |
	| [attribute=value] | 选取属性的值为value的元素 | 集合元素 | $("div[title=test]")选取属性title为"test"的\<div\>元素 |
	| [attribute!=value] | 选取属性的值不等于value的元素 | 集合元素 | $("div[title!=test]")选取属性title不等于"test"的\<div\>元素（注意：没有属性title的\<div\>也会被选取）|
	| [attribute^=value] | 选取属性的值以value开始的元素 | 集合元素 | $("div[title^=test]")选取属性title以"test"开始的\<div\>元素 |
	| [attribute$=value] | 选取属性的值以value结束的元素 | 集合元素 | $("div[title$=test]")选取属性title以"test"结束的\<div\>元素 |
	| [attribute*=value] | 选取属性的值含有value的元素 | 集合元素 | $("div[title*=test]")选取属性的title含有"test"的\<div\>元素 |
	| [attribute\\|=value] | 选取属性等于给定字符串或者以该字符串为前缀(该字符串后跟一个连字符"-")的元素 | 集合元素 | $('div[title\\|="en"]')选取属性title等于en或以en为前缀(该字符串后跟一个连字符"-")的元素 |
	| [attribute~=value] | 选取属性用空格分隔的值中包含一个给定值得元素 | 集合元素 | $('div[title~="uk"]')选取属性title用空格分隔的值中包含字符uk的元素 |
	| [attribute1][attribute2][attributeN] | 用属性选择器合并成一个复合属性选择器，满足多个条件。每选择一次，缩小一次范围 | 集合元素 | $("div[id][title$='test']")选取拥有属性id，并且属性title以"test"结束的\<div\>元素 |

* 子元素过滤选择器
	
	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :nth-child(index/even/odd/equation) | 选取每个父元素下的第index个子元素或者奇偶元素(index从1算起) | 集合元素 | :eq(index)只匹配一个元素，而:nth-child将为没一个父元素匹配子元素，并且:nth-child(index)的index是从1开始的，而:eq(index)是从0算起的 |
	| :first | 选取每个父元素的第1个子元素 | 集合元素 | :first只返回单个元素，而:first-child选择符将为每个父元素匹配第1个子元素。<br>例如$("ul li:first-child");选取每个\<ul\>中第1个\<li\>元素 |
	| :last | 选取每个父元素的最后一个子元素 | 集合元素 | 同样，:last只返回单个元素，而:last-child选择符将为每个父元素匹配最后一个子元素。<br>例如$("ul li:last-child");选择每个\<ul\>中最后一个\<li\>元素 |
	| :only-child | 如果某个元素是它父元素中唯一的子元素，那么将会被匹配。如果父元素中含有其他元素，则不会被匹配 | 集合元素 | $("ul li:only-child")在\<ul\>中选取是唯一子元素的\<li\>元素 |

* 表单对象属性过滤选择器

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :enabled | 选取所有可用元素 | 集合元素 | $("#form1 :enabled");选取id为"form1"的表单内所有可用元素 |
	| :disabled | 选取所有不可用元素 | 集合元素 | $("#form2 :disabled"); 选取id为"form2"的表单内所有不可用元素 |
	| :checked | 选取所有被选中的元素(单选框，复选框) | 集合元素 | $("input:checked");选取所有被选中的\<input\>元素 |
	| :selected | 选取所有被选中的选项元素（下拉列表）| 集合元素 | $("select option:selected");选取所有被选中的选项元素 |

* 表单选择器

	| 选择器 | 描述 | 返回 | 示例 |
	| ----- | ---- | --- | ---- |
	| :input | 选取所有的\<input\>、\<textarea\>、\<select\> 和\<button\>元素 | 集合元素 | $(":input")选取所有\<input\>、\<textarea\>、\<select\> 和\<button\>元素 |
	| :text | 选取所有的单行文本框 | 集合元素 | $(":text")选取所有的单行文本框 |
	| :password | 选取所有的密码框 | 集合元素 | $(":password")选取所有的密码框 |
	| :radio | 选取所有的单选框 | 集合元素 | $(":radio")选取所有的单选框 |
	| :checkbox | 选取所有的多选框 | 集合元素 | $(":checkbox")选取所有的复选框 |
	| :submit | 选取所有的提交按钮 | 集合元素 | $(":submit")选取所有的提交按钮 |
	| :image | 选取所有的图像按钮 | 集合元素 | $(":image")选取所有的图像按钮 |
	| :reset | 选取所有的重置按钮 | 集合元素 | $(":reset")选取所有的重置按钮 |
	| :button | 选取所有的按钮 | 集合元素 | $(":button")选取所有的按钮 |
	| :file | 选取所有的上传域 | 集合元素 | $(":file")选取所有的上传域 |
	| :hidden | 选取所有不可见元素 | 集合元素 | $(":hidden")选取所有不可见元素 (同不可见性过滤选择器)|

> 3.选择器中的一些注意事项

* 选择器中含有"."、"#"、"("或"]"等特殊字符。当选择器表达式中出现这些特殊字符时，可以使用转义符（"\"）转义。
* 属性选择器的@符号问题。jQuery在1.3.1版本中彻底放弃了1.1.0版本遗留下的@符号，假如你使用1.3.1以上的版本，则不需要在属性前添加@符号。
* 选择器中含有空格的注意事项。可参考如下代码：
	
		var $t_a = $('.test :hidden'); 	//带空格，效果是选取class为"test"的元素里面的隐藏元素
		var $t_b = $('.test:hidden');		//不带空格，效果是选取隐藏的class为"test"的元素

### 第3章 jQuery中的DOM操作

DOM是Document Object Model的缩写，意思是文档对象模型。一般来说DOM操作分为3个方面，即DOM Core(核心)、HTML-DOM和CSS-DOM。

jQuery中的DOM操作，简单举例如下。

> 1.查找节点

* 查找元素节点

		var $li = $("ul li:eq(1)"); //获取<ul>里第2个<li>节点
		var li_txt = $li.text();    //获取第2个<li>元素节点的文本内容
		alert(li_txt);              //打印文本内容

* 查找属性节点

		var $para = $("p");               //获取<p>节点
		var p_txt = $para.attr("title");  //获取<p>元素节点属性title
		alert(p_txt);                     //打印title属性值

> 2.创建节点

* 创建元素节点

		var $li_1 = $("<li></li>");  //创建第1个<li>元素
		var $li_2 = $("<li></li>");  //创建第2个<li>元素
		$("ul").append($li_1);       //添加到<ul>节点中，使之能在网页中显示
		$("ul").append($li_2);       //同上

_注意： 动态创建的新元素节点不会被自动添加到文档中，而是需要使用其他方法将其插入文档中。<br/>_
_当创建单个元素时，要注意闭合标签和使用标准的XHMTL格式。例如创建一个\<p>元素，可以用$("\<p>\</p>"),但不要使用$("\<p>")或者大写的$("\<P/>")_

* 创建文本节点

		var $li_1 = $("<li>香蕉</li>");  //创建一个<li>元素，包括元素节点和文本节点，“香蕉”就是创建的文本节点
		$("ul").append($li_1);          //添加到<ul>节点中，使之能够在网页中显示

* 创建属性节点

		var $li_1 = $("<li title='香蕉'>香蕉</li>");  //创建一个<li>元素，包括元素节点、文本节点和属性节点，其中title='香蕉'就是创建的属性节点
		$("ul").append($li_1);                       //添加到<ul>节点中，使之能够在网页中显示

> 3.插入节点

| 方法 | 描述 | 示例 |
| -- | -- | -- |
| append() | 向每个匹配的元素内部追加内容 | HTML代码：<br/>\<p>我想说\</p><br/>jQuery代码：<br/>$("\<p>").append("\<b>你好\</b>");<br/>结果：<br/>\<p>我想说：\<b>你好\</b>\</p> |
| appendTo() | 将所有匹配的元素追加到指定的元素中。实际上，使用该方法是颠倒了常规的$(A).appendTo(B)的操作，即不是将追加到A中，而是将A追加到B中 | HTML代码：<br/>\<p>我想说：\</p><br/>jQuery代码：<br/>$("\<b>你好\</b>").appendTo("p");<br/>结果：\<p>我想说：\<b>你好\</b>\</p> |
| prepend() | 想每个匹配的元素内部前置内容 | HTML代码：<br/>\<p>我想说\</p><br/>jQuery代码：<br/>$("\<p>").prepend("\<b>你好\</b>");<br/>结果：<br/>\<p>我想说：\<b>你好\</b>\</p> |
| prependTo() | 将所有匹配的元素前置到指定的元素中。实际上，使用该方法是点到了常规的$(A).prepend(B)的操作，即不是将B前置到A中，而是将A前置到B中 | HTML代码：<br/>\<p>我想说：\</p><br/>jQuery代码：<br/>$("\<b>你好\</b>").prependTo("p");<br/>结果：\<p>我想说：\<b>你好\</b>\</p> |
| after() | 在每个匹配的元素之后插入内容 | HTML代码：<br/>\<p>我想说\</p><br/>jQuery代码：<br/>$("\<p>").after("\<b>你好\</b>");<br/>结果：<br/>\<p>我想说：\<b>你好\</b>\</p> |
| insertAfter() | 将所有匹配的元素插入到指定的元素后面。实际上，使用该方法是点到了常规的$(A).after(B)的操作，即不是将B插入到A后面，而是将A插入到B后面 | HTML代码：<br/>\<p>我想说：\</p><br/>jQuery代码：<br/>$("\<b>你好\</b>").insertAfter("p");<br/>结果：\<p>我想说：\<b>你好\</b>\</p> |
| before() | 在每个匹配的元素之前插入内容 | HTML代码：<br/>\<p>我想说\</p><br/>jQuery代码：<br/>$("\<p>").before("\<b>你好\</b>");<br/>结果：<br/>\<p>我想说：\<b>你好\</b>\</p> |
| insertBefore() | 将所有匹配的元素插入到指定的元素前面。实际上，使用该方法是点到了常规的$(A).before(B)的操作，即不是将B插入到A前面，而是将A插入到B前面 | HTML代码：<br/>\<p>我想说：\</p><br/>jQuery代码：<br/>$("\<b>你好\</b>").insertBefore("p");<br/>结果：\<p>我想说：\<b>你好\</b>\</p> |
  
> 4.删除节点，jQuery提供了三种删除节点的方法，即remove(),detach()和empty()。

* remove()方法。当某个节点用remove()方法删除后，该节点所包含的所有后代节点将同时被删除。这个方法的返回值是一个指向已被删除的节点的引用，因此可以在以后再使用这些元素。
	
		var $li = $("ul li:eq(1)").remove();  //获取第2个<li>元素节点后，将它从网页中删除
		$li.appendTo("ul");                   //把刚才删除的节点又重新添加到<ul>元素里 

* detach()方法。这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。

		$("ul li").click(function(){
			alert($(this).html());
		});
		var $li = $("ul li:eq(1)").detach();  //删除元素
		$li.appendTo("ul");                   //重新追加此元素，发现它之前绑定的事件还在，如果使用remove()方法删除元素的话，那么它之前绑定的事件失效

* empty()方法。严格来讲，empty()方法并不是删除节点，而是清空节点，它能清空元素中的所有后代节点。

		$("ul li:eq(1)").empty();  //获取第2个<li>元素节点后，清空此元素里的内容，注意是元素里，并不会清除元素的标签

> 5.复制节点，复制节点使用clone()方法，其中在clone()方法中传递一个参数true时，可以在复制元素的同时复制元素所绑定的事件。

> 6.替换节点，如果要替换某个节点，jQuery提供了相应的方法，即replaceWidth()和replaceAll()。

* replaceWidth()方法的作用是将所有匹配的元素都替换成指定的HTML或者DOM元素。

		$("p").replaceWidth("<strong>你最不喜欢的水果是？</strong>");

* replaceAll()方法与replaceWidth()方法的作用相同，只是颠倒了replaceWidth()操作。
		
		$("<strong>你最不喜欢的水果是？</strong>").replaceAll("p");

_注意：如果在替换之前，已经为元素绑定了事件，替换后原先绑定的事件将会与被替换的元素一起消失，需要在新元素上重新绑定事件。_

> 7.包裹节点，如果要将某个节点用其他标记包裹起来，jQuery提供了相应的方法，即wrap()，wrapAll()，wrapInner()等方法。

* wrap()方法。

		$("strong").wrap("<b></b>")；  //用<b>标签把<strong>元素包裹起来
		//得到的结果如下：
		<b><strong title="选择你最喜欢的水果.">你最喜欢的水果是？</strong></b>

* wrapAll()方法。该方法会将所有匹配的元素用一个元素来包裹。它不同于wrap()方法，wrap()方法是将所有的元素进行单独的包裹。

		$("strong").wrapAll("<b></b>");
		//得到的结果如下：
		<b>
		<strong title="选择你最喜欢的水果.">你最喜欢的水果是？</strong>
		<strong title="选择你最喜欢的水果.">你最喜欢的水果是？</strong>
		</b>	
_注意：如果被包裹的多个元素间有其它元素，其它元素会被放到包裹元素之后。_
*  wrapInner()方法，该方法将每一个匹配的元素的子内容（包括文本节点）用其他结构化的标记包裹起来。

		$("strong").wrapInner("<b></b>")；
		<strong title="选择你最喜欢的水果."><b>你最喜欢的水果是？</b></strong>

> 8.属性操作，在jQuery中，用attr()方法来获取和设置元素属性，removeAttr()方法来删除元素属性。

* 获取属性和设置属性。

		var $para = $("p");                //获取<p>节点
		var p_txt = $para.attr("title");  //获取<p>元素节点属性title
		$para.attr("title","your title");  //设置单个的属性值
		$para.attr({"title":your title","name":"test"}); //将一个“名/值”形式的对象设置为匹配元素的属性
_注意：jQuery中的很多方法都是同一个函数实现获取(getter)和设置(setter)的，例如上面的attr()方法，既能设置元素属性的值，也能获取元素属性的值。类似的还有html()、text()、height()、width()、val()和css()等方法。_

* 删除方法，在某些情况下，需要删除文档中某个元素的特定属性，可以使用removeAttr()方法来完成该任务。

		$("p").removeAttr("title");  //删除<p>元素的属性title
_注意：jQuery1.6中新增了prop()和removeProp()，分别用来获取在匹配的元素集中的第一个元素的属性值和为匹配的元素删除设置的属性。_

> 9.样式操作(个人理解：直接设置样式可以用css()方法，可以把下面介绍的设置样式的方法理解为设置元素的class属性值)

* 获取样式和设置样式

		var p_class = $("p").attr("class");  //获取<p>元素的class
		$("p").attr("class","high");         //设置<p>元素的class为"high"

* 追加样式

		$("p").addClass("another"); //给<p>元素追加"another"类

* 移除样式

		$("p").removeClass("another"); //移除<p>元素中值为"another"的class
		//jQuery提供了更简单的方法，可以以空格的方式删除多个类名
		//当它不带参数时，就会将class的值全部删除

* 切换样式，toggle()方法可以控制行为上的重复切换，toggleClass()方法可以控制样式上的重复切换，如果类名存在则删除它，如果类名不存在则添加它。

* 判断是否含有某个样式，hasClass()可以用来判断元素中是否含有某个class，如果有则返回true,否则返回false。

_注意：hasClass()方法是为了增强代码可读性而产生的的，在jQuery内部实际上时调用了is()方法来完成这个功能的，该方法等价于is()方法。_

> 10.设置和获取HTML、文本和值

* html()方法，此方法类似于JavaScript中的innerHTML属性，可以用来读取或者设置某个元素中的HTML内容。
* text()方法，此方法类似于JavaScript中的innerText属性，可以用来读取或者设置某个元素中的文本内容。
* val()方法，此方法类似于JavaScript中的valeu属性，可以用来设置和获取元素的值。

> 11.遍历节点 

* children()方法，该方法用于取得匹配元素的子元素集合。children()方法只考虑子元素而不考虑其他后代元素。
* next()方法，该方法用于取得匹配元素后面紧邻的同辈元素。
* prev()方法，该方法用于取得匹配元素前面金陵的同辈元素。
* siblings()方法，该方法用于取得匹配元素前后所有的同辈元素。
* closest()方法，该方法用于取得最近的匹配元素。首先检查当前元素是否匹配，如果匹配则直接返回元素本身，如果不匹配则向上查找父元素，逐级向上直到找到匹配选择器的元素，如果什么都没有找到则返回一个空的jQuery对象。

_除此之前，jQuery中还有很多遍历节点的方法，例如find()、filter()、nextAll()和prevAll()等。_

> 12.CSS-DOM操作

* 可以直接使用css()方法获取、设置元素的样式属性。
* 可以使用height()方法获取、设置元素的高度。
* 可以使用width()方法获取、设置元素的宽度。
* offest()方法是获取元素当前视窗的相对偏移，其中返回的对象包含两个属性，即top和left,它只对可见元素有效。
* position()方法是获取元素相对于最近的一个position样式属性为relative或者absolute的祖父节点的相对偏移，其中返回的对象包含两个属性，即top和left,它只对可见元素有效。
* scrollTop()方法和scrollLeft()方法。这两个方法的作用分别是获取元素的滚动条距顶端的距离和距左侧的距离。