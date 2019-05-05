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
    //交换函数；
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  // var swapQuickSort = function(array,index1,index2){
  //   //快排交换函数；
  //   let aux = array[index1];
  //   array[index1] = array[index2];
  //   array[index2] = aux;
  // }

  this.bubbleSort = function(){
    //冒泡法排序；
    var length = array.length
    for(let i=0;i<length;i++){
      for(let j=0;j<length-i-1;j++){
        if(array[j] > array[j+1]){
          swap(j,j+1);
        }
      }
    }
  }

  this.selectionSort = function(){
    //选择法排序：
    var length = array.length, indexMin;
    for(let i=0;i<length-1;i++){
      indexMin = i;
      for(let j = i; j<length;j++){
        if(array[indexMin]>array[j]){
          indexMin = j;
        }
        if(i !== indexMin){
          swap(i,indexMin);
        }
      }
    }
  }

  this.insertSort = function(){
    //插入法排序；
    var length = array.length,j,temp;
    for(let i =1;i<length;i++){
      j = i;
      temp = array[i];
      while(j>0 && array[j-1] > temp){
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
  }


  this.mergeSort = function(){
    //并归排序法；
    array = mergeSortRec(array);
  };
  var mergeSortRec = function(array){
    var length = array.length;
    if(length === 1){
      return array;
    }
    var mid = Math.floor(length/2),left = array.slice(0,mid),
    right = array.slice(mid,length);
    return merge(mergeSortRec(left),mergeSortRec(right));
  }
  var merge = function(right,left){
    var result = [],il = 0, ir = 0;
    while(il < left.length && ir < right.length){
      if(left[il] < right[ir]){
        result.push(left[il++]);
      }else{
        result.push(right[ir++]);
      }
    }
    while(il < left.length){
      result.push(left[il++]);
    }
    while(ir < right.length){
      result.push(right[ir++]);
    }
    return result;
  }

  this.quickSort = function(){
    //快速排序法；
    // quick(array, 0, array.length-1);
    quick(array);
  }
  // var quick = function(array, left, right){
  //   let index;
  //   if(array.length > 1){
  //     index = partition(array, left ,right)
  //     if(left < index - 1){
  //       quick(array,left,index -1);
  //     }
  //     if(index < right){
  //       quick(array,index,right);
  //     }
  //   }
  // };
  // var partition = function(array, left ,right){
  //   let pivot = array[Math.floor((right + left)/2)],
  //       i = left,j = right;
  //   while(i <= j){
  //     while(array[i] < pivot){
  //       i++;
  //     }
  //     while(array[j] > pivot){
  //       j--;
  //     }
  //     if(i <= j ){
  //       swapQuickSort(array,i,j);
  //       i++;
  //       j--;
  //     }
  //   }
  //   return i;
  // };



  var quick = function(array){
  　　if (array.length <= 1) { return array; }
  　　let pivotIndex = Math.floor(array.length / 2);
    　let pivot = array.splice(pivotIndex, 1)[0];
    　let left = [];
    　let right = [];
    　for (let i = 0; i < array.length; i++){
    　　　if (array[i] < pivot) {
    　　　　　left.push(array[i]);
    　　　} else {
    　　　　　right.push(array[i]);
    　　　}
    　}
    　return quick(left).concat([pivot], quick(right));
  };
}




function creatNum(size) {
  let array = new ArrayList();
  for(let i = size; i>0; i--) {
    array.insert(i);
  }
  return array;
}


var array = creatNum(10);
console.log(array.toString()); 
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
array.quickSort();
console.log(array.toString());