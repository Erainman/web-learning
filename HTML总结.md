# HTML总结



### 基本HTML模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

### 以下介绍各个标签

**html**

表示文档的html部分，根标签 (root element),一个页面只能有一个没有的话，浏览器也会自动添加



**head**

头部标签，head里的内容不会被显示在页面上不存在的话，也会自动添加,放一些与页面相关的“元信息”，比如：

- 页面的编码方式:

​			`<meta charset="utf-8">`chartset：字符集	meta：元

​			一般的乱码都是因为编码方式引起的

- 页面的标题，即title标签
- 页面的图标，即浏览器标题栏左边显示的那个小图标; 页面图标可以用一个标签来设置<link>
- 页面的样式表<style>



**body**

想要在页面中被显示出来的内容都放在这个标签里面,如果页面没有html或者body标签，浏览器会自动添加，并将页面内容包含在body里面，但浏览器同时也会将那些必须放在head里的标签放进head里面，比如title标签

       ```html
                <title>页面标题</title>
                <h1>一级标题</h1>
                <p>一个段落</p>
                ```
相当于

         ```html
                <!-- <!doctype html> 这一行不会自动添加的 -->
                <html>
                    <head>
                        <title>页面标题</title>
                    </head>
                    <body>
                        <h1></h1>
                        <p></p>
                    </body>
                </html>
                ```
 同时，如果在body或者html标签的**结束标签之后**又出现了其它的标签，则之前的结束标签就会被认为无效，浏览器会自动添加结束标签

        ```html
                  <html>
                      <head></head>
                      <body>
                          <div></div>
                      </body> 这行会被认为无效
                      <p></p>
                      <script></script>
                  </html>
                  <div></div>
                  ```
相当于

                  <html>
                      <head></head>
                      <body>
                          <div></div>
                          <p></p>
                          <script></script>
                          <div></div>
                      </body>
                  </html>


**title**

 页面标题，仅支持纯文本，不支持嵌套其它标签，如果不出现在head内，将自动移到head内， 出现多个的话，仅第一个生效


**base基准**

```
<base href="页面中所有相对路径的基准地址" target="页面中所有链接的打开位置">
```



**h1-h6 标签**

​	header(标题) 1 到 6，默认情况下，标题上下会有一定的空白，比较传统的观点认为一个页面不能出现超过一个h1标签，原因是为了 (SEOSearch Engine Optimism搜索引擎优化),讲白了就是如何布置页面能让页面在搜索结果中尽量靠前

​	HTML5 中新增了 hgroup（即header group） 标签，大致用法如下：H5

   ```html
            <hgroup>
                <h2>三体</h2>
                <h3>一部人类文明的诗史</h3>
            </hgroup>
   ```

即当不同级别的标题显示在一起的时候可以用这个标签把hN标签归类,一般来说，这个标签可以替换以前使用div的场景、



 **p 标签**(paragraph)

语意是一个段落，当想要表达一段话时都可以使用这个标签，默认情况下也会有上下边距。



**a标签**(anchor, 锚)

语义是一个链接，链接地址写在  href（Hyperlink REFerence）属性里，可以链接到的类型非常多，而且一般来说是可扩展的

**href属性**

- 绝对网址(fullpath)：`<a href="https://jd.com/">京东</a>`
- 页内特定位置跳转地址，在书目的章节跳转在使用的比较多 `<a href="#pos1"></a>`
- 相对路径: `<a href=".././../a/b/../index.html"></a>`
-  电子邮件`<a href="mailto:aaa@bbb.com?title=1&subject=2&content=3"></a>`
- 电话号码tel，主要用在手机页面上:18611075877
- QQ/taobao 临时会话:tencent://temp-chat?QQ=285696737
- 空的href属性 href="" :链接到当前页面，所以仅以#开头的值是中转到当前页面的特定位置，类似的，如果一个img标签的src属性为空，也将对应当前页面地址

**target属性**

可以指定在哪个窗口打开链接，几个特殊值,关键字：

- _blank，链接在空白的窗口显示，也就相当于新打开一个窗口了
- _self，其实这个是默认值，就是在当前窗体打开
- _parent，链接在父窗体显示
- _top，链接在顶层窗体显示

**download属性**(HTML5)

表示点击这个链接将下载链接对应的文件，而不是跳转到目标页面，下载的文件名以download属性的值来命名

`<a href="xxx/jianai.pdf" download="简爱.pdf">点我下截《简爱》完整版</a>`



**img 标签**

 表示一张图片， 用src(source)属性表示图片的地址

<img src="http://www.baidu.com/logo.png" alt="" title="tooltip">`src指定的图片可以是浏览器支持的任意图片格式

- 用 alt(alternative) 属性表示图片在加载失败时的替换文本
- 使用width和height属性定义图片的宽和高
- 只写一个的话另一个会根据图片原始比例计算出来，图片一般来说有自己的宽高（natural width/height），但是图片加载往往需要时间，而图片在加载完成之前浏览器是不知道其宽高的，所以就会产生页面抖动的问题，所以一般会在标签上把宽高写出来，这样图片加载过程中页面就不会抖动

```html
<map>
   <area title="xxxx" href="xxx" shape="rect" coords="0,0,100,100">
   <area title="xxxx" href="xxx" shape="circle" coords="0,0,100,100">
   <area title="xxxx" href="xxx" shape="poly" coords="0,0,100,100">
</map>
```

可以让图片不同区域对应不同的链接



**span标签**

 * ```html
         <p>aaa <span>bbb</span> ccc</p>
      ```
      
            * 是一个没有明确语义(通用语义)的标签
            * 一般来说想要给特定的内容加样式时可以用一个span标签将内容包起来



**div标签**块标签

**br标签**：换行，自闭和标签

 **hr标签**：水平分隔线，自闭合标签，强行写做`<hr>some text</hr>`的话里面的内容会被移出标签，虚标签

**font标签**： 规定文本的字体、字体尺寸、字体颜色。

<font size="25px" face="幼圆" color="red"></font>

 **em标签**：强调

**strong标签**：强调，strong的强调更重一些

**b标签**：样式上加粗

**u标签**：下划线

**i标签**：斜体

**pre标签**：表示有预定义格式的文本，里面的内容的回车跟空格都会被保留，常与code标签 `配合` 使用，用来在网页里显示高亮过的代码

``` HTML
<pre><code class="">code goes here</code></pre>
```

**列表类标签**

ol（有序），ul（无序）

- Ordered List, Unordered List
- 其直接子结点必须只能是li标签，li内可以是任意其它标签
- 默认会在每多一层级的列表中缩进
-  并带有列表项标号，有序和无序的
- 多个同类项的重复，就应该使用ol/ul标签

dl

- Description List
- dt (Description Term)
- dd( Description Description)
-  一个列表项是**一个dt**和**一个或多个dd**一起算一组
- 此标签与ol/ul有些区别，在于一个dt可以对应多个dd

```html
                <ul>
                  <li>
                    <span>老师</span>
                    <span>谢然</span>
                  </li>
                </ul>
                <dl>
                    <dt>老师</dt>
                    <dd>谢然</dd>

                    <dt>学生</dt>
                    <dd>张三</dd>
                    <dd>李四</dd>
                    <dd>王五</dd>
                </dl>
```

### html标签通用属性

- **id**整个页面唯一的值
    * id=23
    * id=a20
    * id=lsdjf
- **class，类名**
    + 空格分隔的单词列表
    + `class="article author-xieran class3"`
- **title**
    + 鼠标放上面的时候出现的tooltip
    + 要打回车怎么办
        * 直接在title里换行
        * html实体
- **contenteditable**表示元素是否可被用户编辑
    + true/false或者空相当于true
- **style**
    + 给可视元素的内联样式
- **tabindex**="123":指示其元素是否可以聚焦，以及它是否/在何处参与顺序键盘导航
    - tabindex=负值 (通常是tabindex=“-1”)，表示元素是可聚焦的，但是不能通过键盘导航来访问到该元素，用JS做页面小组件内部键盘导航的时候非常有用。
    - `tabindex="0"` ，表示元素是可聚焦的，并且可以通过键盘导航来聚焦到该元素，它的相对顺序是当前处于的DOM结构来决定的。
    - tabindex=正值，表示元素是可聚焦的，并且可以通过键盘导航来访问到该元素；它的相对顺序按照**tabindex** 的数值递增而滞后获焦。如果多个元素拥有相同的 **tabindex**，它们的相对顺序按照他们在当前DOM中的先后顺序决定。
    - 根据键盘序列导航的顺序，值为 `0` 、非法值、或者没有 **tabindex** 值的元素应该放置在 **tabindex** 值为正值的元素后面。
    - 如果我们在 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 上设置了 `tabindex` 属性，它的子元素内容不能使用箭头键来滚动，除非我们在内容上也设置 `tabindex`。



### 表单标签

   - **form标签**
       
       - **input**
           - https://www.google.com.hk/search?q=invalid+inentity+escape+in+regular+expression
           - https://stackoverflow.com/questions/36953775/firefox-error-unable-to-check-input-because-the-pattern-is-not-a-valid-regexp
           - https://www.fxsitecompat.com/en-CA/docs/2016/input-pattern-now-sets-u-flag-for-regular-expressions/
           - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input
       * **属性**
           + action
               * 表单提交的地址
           + target
               * 行为类似a标签的target
           + method
               * 表单提交方式
                   - get
                       + 将表单字段拼成querystring
                           * 什么是querystring？
                               - http://abc.com/?a=1&b=2&c=3
                   - post
                       * 这个等学到http再说
           + enctype，编码方式
               * 在讲到http的时候再谈
   - input
       + type属性的各项值
           * text
               
               - 文本
           * password
               
               - 密码
           * checkbox
               - 复选框
               - 以name相同分组
               - checked属性表示默认选中
           * radio
               - 单选框
               - 剩余同上
           * file
               - accept
                   + 可以接受的文件类型
                   + `<input type="file" name="" id="" accept="image/*,text/*">`
                   * MIME Type
                   + `<input type="file" name="" id="" accept=".jpg,.png,.gif,.jpeg,.webp,.exe" value="c:/user/xieran/desktop/a.pdf">`
                   
                   * http://wwww.a.com/favicon.ico
               - 安全问题
               - multiple
                   
                   + 是否支持多选文件
           * hidden
               - 隐藏的输入域
               - value设置其值
               - name设置名字
           * 为以下三个值时，都表现为按钮的样式，按钮上的文字需要用value属性来设置
           * image
               - 此时需要使用src属性指定图片的地址
               - 现在基本上不这么用，之所以有这个用法，是以前不用js时想做出漂亮的按钮时，需要这么用
               - 在html5中，可以在这种标签上给定width跟height，类似img标签相应的属性，src，alt
           * button
           * submit
               
               - 单击时会触发表单的提交
           * reset
               
               - 单击时会重置表单为初始状态
           * **以下为html5新增属性值**
           * number
               - 输入数字
               * e,.,-
               * -3.14e-8
               *   
           * email
               - multiple
               - 使用半角逗号分隔每个地址
           * date 日期
           * datetime-local
           * time 时间
           * url 链接
             * protocal://user:password@domain:port/a/b/c/d.html?a=b&c=d#sldjfoiwjeofij
             * 百度.中国
           * week
           * month
           * tel
           * range
               - min，4
               - max，10
               - step，2
           * color
               
               - value将返回十六进制颜色#abcdef
           * 不能识别的值，当做text来处理
       * 其它属性
           - value
               + 为按钮形态时设置上面的文字
               + 为输入框时设置里面的默认内容
                 * datetime-local
                   * https://zh.wikipedia.org/wiki/ISO_8601
           - disabled
               + 无值的属性
               + 禁用这个输入域
           - required
               + 设置这个输入域为必填项
               + 不填的话无法用**正常手段**触发表单提交
           - maxlength
               + 为文本输入框时设置输入的最大长度
           - minlength
               + 同上，但为设置最小长度
               + 不过兼容性不太好，不少浏览器没有实现
                   * 有点矛盾，不填的时候是空的，当然会非法
           - placeholder
               + 占位符
               + 提示性文字，一旦输入内容就消失
           - autofocus
               + 自动获得焦点，即页面加载完后光标自动在这个元素内
           - tabindex
               + 按tab键在不同输入域之间跳转时的顺序
               + 会往顺序更大的元素跳
               + 为-1的话会跳过那个元素
           - name
               + 很重要，表单提交时，这个域/字段/框/FormControl的名字
               + 同时，在radio和checkbox阵列里，name相同的元素被分在一组里
   - button
       + type属性
           * 不写type属性的话，默认为submit
               - 即：无type的button的type属性默认为submit
           * `<button type="reset/button/submit">Submit</button>`
           * button
               - 常规按钮，功能上与input[type="button"]一样
           * submit
               - 提交按钮，功能上与input[type="submit"]一样
           * reset
               - 重置按钮，功能上与input[type="reset"]一样
       + 与`<input type="button" name="b" value="lksjdf">`的区别
           * input的button只能在按钮上显示纯文字
           * 而button标签可以在按钮上显示其它内容比如图片（即嵌套其它标签），文字也可以设置不同颜色等
   - label 标签
       + 一般与checkbox及radio一起用，以扩大这两个按钮的可点击区域，提升用户体验。当然，也可以跟其它元素一起用，不过一般没必要（比较典型的是与input:file一起用）
       - for属性
           + 为 想要被扩大点击区域的元素的id，不带井号
           - 支持度非常好，ie5都支持
           - 细节：在ie8及以下不能用于displaynone的表单元素，可能是因为 not focusable
           - 表单元素嵌套在label的时候可以不用for属性
             ```html
             <form action="">
               有for的用法
               <label for="oneid">One</label>

               <input onclick type="text" id="oneid">

               不用for的用法
               <label>
                 <input type="checkbox"> 男
               </label>
             </form>
             ```
       - 如下怎么算呢？
         ```html
         <input id="a">
         <label for="a">
           <input type="text">
         </label>
         ```

       - 典型的坑，两次点击，等学了js后再谈
   - select name="sel"
       + 下拉选择框
       + 属性
           * multiple
               - 无值属性，表示多选，多选时就不是下拉的样式了
       + 另外此标签在不同的系统里面样式差别很大，而且它的样式一般来说是取自系统自带的，所以很难被css控制
           * 所以一些对ui要求比较高的网站都选择用其它元素模拟下拉框
               - 例：小米路由器
   * option
       * value
           - 选择了该项目后它所属的select元素的值
       * selected
           - 默认被选中
       * disabled
           - 表示该项被禁用
       * hidden
           - 表示该项被隐藏
       
       - 以上三个属性均无值
   * optgroup // hgroup  colgroup
       - 给option分组
       - 用label属性表示这个分组的名字
       - 无法被选中，只能选择option
       - 有一个disabled属性，如果设置了这个属性，整组标签都会被禁用
       ```html
       <select>
           <option value="1">1</option>
           <optgroup label="这是一个分组" disabled hidden>
               <option value="01">01</option>
               <option value="02">02</option>
               <option value="03">03</option>
               <option value="04">04</option>
               <option value="05">05</option>
           </optgroup>
       </select>
       ```
       - 兼容性不确定，因为我没用过mac。。。。
   - textarea
       + 多行文本输入框
       + 两个特殊属性
           * rows="3"
           * cols="20"
       + 不过现在也不常用，一般都用css来控制了
   - field set 字段组 用来把 一组 输入域 放在一起的。
       + field就是字段的意思，就是说一个表单输入域（输入框）
       + 这个标签用来给输入域分组，所以叫set
           * set本来就是组的意思
       + 如果只是分组，完全可以用div等标签
           * 那这个标签有什么用呢？
           * fieldset有个disabled属性，如果它有了这个属性，其内的所有输入域都将被禁用，类似optgroup
               - 在某些场景下是非常好用的
   - legend
       + 只能作为 fieldset 的子元素，用来标识这组输入域的名字，基本上没有其它用处
           * 而且在有了css之后，这个标签基本也没有用武之地了