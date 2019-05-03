#函数总结：

**函数是对象，函数名是指针**。

函数名是变量，可以作为参数来使用；即高级函数；
``` js
function sum(num1,num2){return num1+num2;};
var sum=function(num1,num2){
    return num1+num2;
    }; //通过sum变量直接引用函数对象
```
```js
var sum = new function("num1","num2","return num1+num2"); //通过构造函数,不推荐
```
`var ansum = sum;//使用不带圆括号的函数名是访问函数指针，并非调用函数对象；`
**JS中函数没得重载**
ES函数参数在内部是用数组的形式来表示的，在函数体内可以通过arguments对象来访问这个参数数组；


##函数内部的对象：

###arguments对象：

在函数体内可以通过arguments对象来访问这个参数数组；类数组对象arguments[0]表第一个参数；

**对象属性**：callee:是一个指针，指向拥有argument对象的函数
length：确定传递进来多少参数

```js
阶乘函数：
function factorial(num){
    return num<=1 ? 1 : num*factorial(num-1);
}
```
-阶乘函数用到了递归，函数的执行与函数名factorial紧紧耦合在一起，此时改变函数名会导致错误，可使用arguments.callee来**消除耦合**；
```js
function factorial(num){
    return num<=1 ? 1 : arguments.callee(num-1);
}
```


###this对象：

**引用的是函数据以执行的环境对象**（ 在网页的全局作用域中调用函数时，this引用的对象引用就是window）
```js
window.color='red'
var o={color:'blue'}
function sayColor(){
    alert(this.color);
}
sayColor();//'red'
o.sayColor=sayColor
o.sayColor();//'blue'
```
//函数名只是一个包含指针的变量，即使在不同的环境中执行，sayColor()和o.sayColor()指向的仍是同一个函数。
上述函数实在全局作用域中定义的，它引用了this对象，在调用函数前this对象并不确定，因此this会在代码的执行引用不同的对象。当全局作用域中调用this是，其引用的是window对象，即window.color；当将函数赋值给对象o并调用o。.color时，this指向的时对象o。

caller:这个属性保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，其值为null；



##函数自带的属性和方法：
**属性**：
- .length:表示函数接受参数的个数；
- .prototype:是保存他们所有实例方法的真正所在，不可枚举，for-in无法发现；

**方法**：

- apply(this,arr)//第一个参数是函数运行的函数作用域，第二个参数是参数数组arr的实例或arguments对象，用途是在特定的作用域中调用函数，扩充函数运行的作用域,最大的好处就是对象不需要与方法有任何耦合关系就可以调用；
- call(this,num1,num2...):与apply作用相同，区别只是接受参数的方式不同；
``` js
sayColor.call(this);        //red
sayColor.call(window);      //red
sayColor.call(o);           //blue
```


##函数闭包

**函数闭包**：函数和函数内部能访问到的变量（也叫环境）的总和，就是一个闭包；其实就是函数套函数；
**闭包**：指有权访问另一个函数作用域中变量的函数；内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后，因为闭包调用了父级函数的参数，使父级函数的变量一直存在于调用栈中。
**函数调用过程**：当某个函数被调用时；会创建一个执行环境及相应的作用链域。然后使用arguments和其他命名参数的值来初始化函数的的活动对象，但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象，处于第三位，直至作为作用域链终点的全局执行环境；在函数执行过程中，为读取和写入变量的值，需要直接在作用域链中查找变量；
作用域链本质上是是一个指向变量对象的指针列表，它只引用但不包含变量对象。
eg：函数a返回函数b时，如果b引入了函数a的局部变量，实际返回值就变成了函数b的一个函数体加一个闭包，闭包里就是函数b用到的全部变量；
  
**闭包的作用**：

return 一个函数：
用来间接访问一个变量（隐藏变量）：函数套函数是为了造出一个局部变量，外部环境可以通过return的这个函数（闭包）访问到上级函数的局部变量；即提供一个局部变量的访问接口，必须通过接口修改局部变量；
```js
!function(){
  var lives = 50
  window.奖励一条命 = function(){
    lives += 1
  }
  window.死一条命 = function(){
    lives -= 1
  }
}()
```
如上所示，通过闭包，你要修改lives必须要通过定义的闭包才能访问lives；



**闭包的副作用**：闭包只能取得包含函数中任何变量的最后一个值。闭包保存的是整个变量对象，不是某个特殊的变量；
```js
function creatFunction(){
    var result = new Array();
    for (var i=0;i<10;i++){
        result[i] = function(){
            return i;
        }
    };
    return result;
}
let s =creatFunction() ;
console.log(s[2]()); //10;闭包只能取得包含函数中任何变量的最后一个值

function creatFunction1(){
    var result = new Array();
    for (var i=0;i<10;i++){
        result[i] = function(nums){
            return function(){
                return nums;
            };
        }(i);
    };
    return result;
}
let m =creatFunction1() ;
console.log(m[2]()); //2;在闭包在套一层闭包即可解决；
```