# String知识：

## 方法总结：

- **str.charAt(index)**           //return str；      //获取字符串的某个位置的字符；
- **str.indexOf(str)**             //return num : -1   //检索字符串；
- **str.lastIndexOf(str)**         //return num : -1   //从后向前检索字符串；
- **str.includes(str)**           //return true : false//检查一段字符是否包含另一段字符；
- **str.split(str)**               //return arr        // 用将字符串分割成数组； 支持正则表达式regexp
- **str.concat(str)**              //return  str       //将一段字符串粘接在另一字符串后；
- **str.slice(num,num)**          //return str        //截取字符串；不改变原字符串
- **str.substring(start,end+1)**  //return str        //截取n到m的字符串；返回一个新的字符串； 不改变 
- **str.substr(start,length)**    //return str        //截取start 起始长度为length的字符串；不改变
- **str.trim()**                  //return str        //去除字符串两端的空格；
- **str.match(regexp)**           //return arr ：null //方法match()将检索字符串string，以找到一个或多个与regexp匹配的文本。
- **str.search(regexp)**          //return index :-1  //string中第一个与regexp相匹配的子串的起始位置。
- **str.replace(regexp, replacement)**// return str   //用replacemenc替换了与regexp的第一次匹配或所有匹配执查找并替换的操作。不改变原字符串；
- **str.toLowerCase()**           //return str        //返回一个新的字符串，将所以字符串小写
- **str.toUpperCase()**           //return str        //返回一个新的字符串，将所以字符串大写
- **str.charCodeAt(str)**         //return ASCII码    //字符转为ascii   //A-Z 65-90 ; a-z 97-122; 换行10 回车13;0 49;空格32
- **str.fromCharCode(num)**      //return str        //ascii转为字符
- **str.repeat(times)**           //return str        //返回一个新的字符串,表示将原字符串重复time次；如果time为负或infinity会报错；
- **str.startsWith(str1)**        //return  true : false //表示参数字符串str1是否在源字符串的头部；
- **str.endsWith(str1)**          //return  true : false //表示参数字符串str1是否在源字符串的尾部；
- **str.localscompare(str1)**     //return 1:0:-1//比较两个字符串在字母表上的位置；参数在前返回1，相等为0，在后返回-1

## 应用方法总结：

- **翻转字符串**：
`str.split('').reverse().join('');`
- **删除某个(str2)字符**：
```javascript
str.substring(0,str.indexOf(str2))+str.substring(str.indexOf(str2)+1,length)
let reg = new RegExp(str1,"g") 
str2.replace(reg,"");
str.split(str2).join("");
```



### str.silce();  str.substring();  str.substr() 区别：

​    slice()和substring()接收的第二个参数表示子字符串的结束索引的后面的字符索引，可以理解不包括该索引的子字符串。substr()的第二个参数则表示截取的字符串的长度。
　　在参数为负数时，slice()则会把参数中无论一个负数还是两个负数，按字符串.length与该负数相加的方式转换为正数，然后再根据正数的方式，从开始索引到结束索引（不包含）的方式截取子字符串，如果转换后的负数还是负数不会继续进行转换。
　　substring()方法在参数为正数时与slice()没有什么区别，唯一的一个特点就是当第二个参数小于第一个参数时，它会把小的参数当作第一个截取的开始索引，大的参数当作结束位置索引（不包含该位置的字符），参数为负数时自动归0。
　　substr()方法在参数为负数时，第一个参数如果为负数，则按字符串.length+第一个参数的方式转换为正数，如果第二个参数为负数则归为0。

```
var str="abcdef";
console.log(str.slice(0));//abcdef
console.log(str.slice(0,3));//abc
console.log(str.slice(-4,3));//c
console.log(str.slice(-3,-1));//截取(6-3, 6-1)，得到de
console.log(str.slice(-10,6));//"abcdef",6-10=-4到6，得到abcdef

console.log(str.substring(6,0));//会自动翻转，得到0到6之间的字符abcde
console.log(str.substring(-100,3));//计算得到0到3之间的字符abc
console.log(str.substring(-1,-9));//0到0之间的字符“”

console.log(str.substr(-6,-100));//从0开始截取0个字符得到‘’
console.log(str.substr(-6));//从0开始到结束得到abcdef
```

**str.replace说明**： 返回一个新字符串，是用replacemenc替换了与regexp的第一次匹配或所有匹配之后得到的。字符串string的方法replace()执行的是查找并替换的操作。

它将在string中查找与regexp相匹配的子串，然后用replacement替换这些子串。如果regexp具有全局性质g，那么replace()将替换所有的匹配子串。否则，它只替换第一个匹配子串。
 replacement可能是字符串或函数。如果它是一个字符串，那么每个匹配都将由字符 串替换。但replacement中的$字符具有特殊的含义。如下面所示，它说明从模式匹配得到的字符串将用于替换。

- $1,$2...$99 :与regexp中的第1到第99个子表达式相匹配的文本
- $& :与regexp相匹配的子串
- $` :位于匹配子串左侧的文本
- $' :位于匹配子串右侧的文本
- $$ :直接量$符号
- $n :匹配第n个捕获组的字字符串；如果正则表达式中没有捕获组则返回空字符串；
 replace()方法的参数replacement可以是函数而不是字符串，在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。该函数的第一个参数是匹配模式的字符串。接下来的参数是与模式中的子表达式匹配的字符串，可以有0个或多个这样的参数。接下来参数是一个整数，声明了匹配在string中出现的位置。最后一个参数是string自身。

#### 字符串的遍历器接口：（ES6添加）

```
for(let codePoint of 'yo!'){
    console.log(codePoint); 
} //y;//o;//o;//!;
```



