#数组（array）总结

##数组的方法总结：
- arr.concat(value,..)        //return arr    //返回一个新数组；连接数组；
- arr.join(str1)              //return str    //把每个数组元素转换成一个字符串，然后把这些字符串连接起来，在两个元素之间插入指定的str字符串。
- arr.length                  //return num    //数组的长度
- arr.push(value...)          //return arr    //数组的入栈操作//将数据添加到栈尾
- arr.pop()                   //return value  //数组的出栈操作//将栈尾的数据移除
- arr.shift()                 //return value  //数组的队列操作//将数组第一项移除
- arr.unshift(value..)        //return arr    //数组头部插入一个数据；
- arr.reverse()               //return arr    //翻转数组；
- arr.slice(start,end)        //return arr    //返回一个新的数组，包含start到end所有的数据，不修改原数组；start、end如果是负数，它声明从数组尾部开始算起的位置；
- arr.splice(start,deleteCount，Value,...) //return arr//删除从start开始(包括start所指的元素在内)的元素，用参数列表中值来替换被删除的元素。直接在原数组进行修改；deleteCount：start开始，包括start所指的元素在内要删除的元素个数，可选；Value：插入的值；
- arr.sort()                  //return arr    //对数组进行排序（按字母顺序）arr.sort((x,y)=>x-y );从小到大进行排序；
- arr.toString()              //return str    //将数组转换成一个字符串；
- arr.isArray(value)          //return true:false//检测是否是一个数组；
- arr.indexOf(value,start)    //return index : -1//从左向右检索数组；返回数组第一个含有value的位置
- arr.lastIndexOf(value,start)    //return index : -1//从右向左检索数组；返回数组第一个含有value的位置







迭代方法总结(高级函数&回调函数)：**均不会修改原数组的值；**
```js 
arr.forEach(function(item,index,array){             //对数组中的每一项运行给定函数，无返回值；不会修改原数组的值；
    //执行某项操作
})  
 
example：let arr = [1,2,3,4,5 ]
    arr.forEach(function(item,index,array){             
        console.log(item)
    })   //等于for循环遍历数组每一项；
```

```js
arr.every(function(item,index,arr){                 // 对数组中的每一项运行给定函数,如果该函数对每一项都返回TRUE,则返回TRUE；
    //条件
})
example：
let arr=[1,2,3,4,5,6]
let ts=arr.every(function(item,index,array){
    return ( item>2)
})
console.log(ts)   //false;
```

```js
arr.some(function(item,index,arr){                 // 对数组中的每一项运行给定函数,如果该函数有任一项返回TRUE,则返回TRUE；
    //条件
})
example：
let arr=[1,2,3,4,5,6]
let ts=arr.some(function(item,index,array){
    return ( item>2)
})
console.log(ts)   //true;
//every和some区别可以类比&&和||；
```

```js
arr.filter(function(item,index,array){          //筛选函数；对数组中的每一项运行给定函数，返回满足函数的项；不会修改原数组的值；
    //条件；
})
example：
let arr=[1,2,3,4,5,6,5,4,3,2,1]
let ts=arr.filter(function(item,index,array){ 
    return ( item < 2 )
})
console.log(ts)   //[1,1]
应用：数组去重：
let arr1 = arr.filter((item,index,arr)=>arr.indexOf(item) === index);
console.log(arr1);//[1,2,3,4,5];
```


```js
arr.map(function(item,index,array){          //对数组中的每一项运行给定函数，返回所有运行函数后得到的项；不会修改原数组的值；
    //条件；
})
example：
let arr=[1,2,3,4,5,6,5,4,3,2,1]
let ts=arr.map(function(item,index,array){ //
    return ( item *2 )
})
console.log(ts)   //[ 2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2 ]
```






##数组的并归方法：
```js
arr.reduce(function(prev,cur,index,array){
    //函数内容；
},value)
//从第一项开始，迭代数组所有项，返回一个最终值；接受两个参数function和作为并归基础的默认值value（可省略）；function函数接受四个参数：前一个值、当前值、索引值、数组对象；这个函数返回的任意值都会作为第一个参数自带传给下一项，返回函数继续进行迭代；下例中第一次迭代发生在数组的第二项上，因此函数第一个参数是数组的项，第二个参数是数组的第二项；arr.reduceRight()是从左向右迭代，其他与reduce一样；
example：
let arr=[1,2,3,4,5];
let a=arr.reduce(function(prev,cur,index,array){
    return prev+cur;
})
console.log(a);//15;
```
例题：lettcode-169:
求众数，给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在众数。
输入: [3,2,3]
输出: 3
```js
var majorityElement = function (nums) {
    return [...nums.reduce((map, item) => {
        map.set(item, (map.get(item) || 0) + 1); return map
    }, new Map())]
        .sort((x, y) => y[1] - x[1])[0][0]
};
```



