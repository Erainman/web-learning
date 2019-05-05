#排序总结(五种排序算法的JS实现)

##冒泡法排序思想：
 冒泡法比较任何相邻两项，如果第一个第二个大，则交换他们，直至最大的元素沉至最右边，进行排序；

##选择法排序思想：
 是一种原址比较算法，找到数组中的最小值，并将放置到数组的第一位，接着找到数组的第二位并放置在第二位，以此类推对数组进行排序；

##插入法排序思想：
 插入法排序每次排一个数组项，嘉定数组第一项已经排序了，接着和数组第二项比较，第二项比第一项大，待在原位，反之插在第一项之前，接着与第三项比较，将第三项插到合适的位置，以此类推对数组进行排序；

##并归法排序思想：
 并归法是一种分治算法，其思想试讲原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组并归成较大的数组，在并归的同时进行排序，直至最后只有一个排序完毕的大数组；归并排序是递归算法；(在Firefox浏览器数组的sort排序方法用的是并归法进行排序)

##快速排序法思想：
 快排也是分治算法，将原始数组分割成较小的数组进行操作；首先从数组选择任意一项（一般选择中间的一项）作为主元；创建两个指针，左边一个指向数组第一项，右边一个指向数组最后一项，移动左指针直到我们找到一个比主元大的元素，接着移动右指针直至找到一个比主元小的元素然后交换他们，重复这个过程，直至左指针超过右指针，使比主元小的值都排在主元之前，比主元大的元素都排在主元之后(划分步骤)；接着对划分后的小数组(较主元小的值组成的子数组和较主元大的值组成的子数组)重复以上步骤，进行递归，直至数组已经排序完毕。(在chrome浏览器数组的sort排序方法用的是快排)
简单来说就是：
（1）在数据集之中，选择一个元素作为"基准"（pivot）。
（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。



*下面是各排序算法的算法实现(JS)*
**算法书P132上有具体运行图可帮助理解；**

```js
  function ArrayList() {
  //定义一个数组（队列）
  var array =[];
  this.insert = function(item){
    array.push(item);
  }

  this.toString = function(){
    return array.join();
  }

  var swap = function(index1,index2){
    //交换函数；单独创建，方便函数复用，以下相同；
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  var swapQuickSort = function(array,index1,index2){
    //快排交换函数；
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  this.bubbleSort = function(){
    //冒泡法排序;复杂度O(n^2)
    let length = array.length
    for(let i=0; i<length; i++){
      //外循环，控制数组经过多少轮排序；
      for(let j=0; j<length-i-1; j++){
        //内循环从第一位迭代(已减去从外循环跑过的轮数)；
        //进行当前项与下一项的比较
        if(array[j] > array[j+1])
          swap(j, j+1);//交换
      }
    }
  }

  this.selectionSort = function(){
    //选择法排序;复杂度O(n^2)
    let length = array.length, indexMin;
    for(let i=0;i<length-1;i++){
      //迭代数组，控制迭代次数；
      indexMin = i;
      //假设迭代轮次第一个值为数组最小值；
      for(let j = i; j<length; j++){
        if(array[indexMin] > array[j]){
          indexMin = j;
        }
        //比较位置j的值是不是比最小值小，将最小值的位置赋为indexMin
        if(i !== indexMin){
          swap(i,indexMin);
        }
        //如果实际最小值的位置与假设最小值的位置不同，则交换；
      }
    }
  }

  this.insertSort = function(){
    //插入法排序；复杂度O(n^2)
    var length = array.length,j,temp;
    for(let i =1;i<length;i++){
    /*迭代数组给第i项找到正确的位置；算法是从第二项进行排序的，默认第一项已经排序；*/
      j = i;
      temp = array[i];
      //将第i项的值和位置储存在辅助变量j和temp中，之后便于将其插在正确的位置
      while(j > 0 && array[j-1] > temp){
        /*找到正确的位置来插入，只要变量j>0(数组第一项索引为0)，并且数组前面的值大于待比较的值，就把这个值移到当前位置上并减小j，最终该元素就能插入到适当的位置(实际是从左向右一项一项交换实现原位置的值等于插入位置的值)。*/
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
      //将待比较的值插到适当的位置，此时的j是已经经过递减的待插入的位置
    }
  }
  //排小型数组时要优于冒泡法和选择法；


  this.mergeSort = function(){
    //并归排序法；复杂度O(nlog^n)
    array = mergeSortRec(array);
  };
  var mergeSortRec = function(array){
    //递归函数
    var length = array.length;
    if(length === 1){
      return array;
    }//将一个大数组转化为多个小数组直到数组只有一项(这实际是在递归里面实现的)
    var mid = Math.floor(length/2),left = array.slice(0,mid),
    right = array.slice(mid,length);
    //如果length>1,则将数组一分为二，
    return merge(mergeSortRec(left),mergeSortRec(right));
    /*调用merge函数，合并和排序小数组直到数组排序完成，递归的过程是 对left数组和right数组不断调用mergeSortRec函数，将大数组分成小数组并同时作为参数传给merge函数；实际排序是发生在合并的过程中*/
  }
  var merge = function(right,left){
    //负责合并和排序小数组；接受两个数组作为参数，排序是发生在合并的过程中；
    var result = [],il = 0, ir = 0;
    while(il < left.length && ir < right.length){
      //迭代两个数组
      if(left[il] < right[ir]){
        result.push(left[il++]);
      }else{
        result.push(right[ir++]);
      }
      //比较来自left数组是否比来自right的小，是则push进结果数组并递增控制变量
    }
    while(il < left.length){
      result.push(left[il++]);
    }
    while(ir < right.length){
      result.push(right[ir++]);
    }
    //将left和right数组剩余的元素push进结果数组
    return result;
  }


  this.quickSort = function(){
    //快速排序法；复杂度O(nlog^n)
    if (array.length <= 1) 
    return arr; 
    quick(array, 0, array.length-1);
  }
  var quick = function(array, left, right){
    let index;
    //声明一个变量，帮助我们将我们把数组分离成较小值数组和较大数组
    //方便我们递归调用quick函数
    if(array.length > 1){
      //长度为1必然已排序
      index = partition(array, left ,right)
      //partition函数的返回值赋值给index；
      if(left < index - 1){
        quick(array,left,index -1);
      }
      if(index < right){
        quick(array,index,right);
      }
      //对分成的大数组和小数组继续递归调用quick函数，直至两指针的交汇处位于left+1处或right处；停止对当前分区的操作；
    }
  };
  var partition = function(array, left ,right){
    //划分过程
    let pivot = array[Math.floor((right + left)/2)],
        i = left,j = right;
        //选择主元pivot(选择最左项对已排序数组来说是最差选择，不推荐)
        //初始化两个指针i,j;i为left数组第一个元素，j为right数组最后一个元素
    while(i <= j){
      //只要i、j两个指针没有交错就执行划分操作，
      while(array[i] < pivot){
        i++;
      }
      while(array[j] > pivot){
        j--;
      }
      //将ij两个指针所代表的元素与主元进行比较直至在left数组找到比pivot大的数和在right数组找到比pivot小的数，然后将两者交换；
      if(i <= j ){
        //只有在ij指针没有交错时才执行交换操作，然后两个指针继续移动
        swapQuickSort(array,i,j);
        i++;
        j--;
      }
      //重复以上过程；
    }
    return i;//返回左指针的索引
  };


}

function creatNum(size) {
  let array = new ArrayList();
  for(let i = size; i>0; i--) {
    array.insert(i);
  }
  return array;
}


var array = creatNum(100000);
// console.log(array.toString()); 
//冒泡法排序，21.5
// array.bubbleSort();
// console.log(array.toString());

//选择法排序，22.7
// array.selectionSort();
// console.log(array.toString());

//插入法排序，10.3
// array.insertSort();
// console.log(array.toString());

//并归法排序，0.24
// array.mergeSort();
// console.log(array.toString());

//快速排序法，0.17
//array.quickSort();
// console.log(array.toString());
```
 以上对各算法的运行时间进行了简单的测试(测试数组[100000-1]的排序)，各算法所耗费的时间如上面所示，故一般采用的并归法或快排来排序数组；
