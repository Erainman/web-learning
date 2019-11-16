
  let swap = (arr , index_1 , index_2) => {
    let temp = arr[index_1]
    arr[index_1] = arr[index_2]
    arr[index_2] = temp
  }


  // 冒泡算法：
let bubbleSort = (arr) => {
    let len = arr.length
    for(let i = 0 ; i < len; i++) {
      let swapped = false
      for (let j = 0;j < len - 1 - i ; j++ ) {
        if(arr[j] > arr[j + 1]) {
          swap(arr , j , j + 1)
          swapped = true
        } 
      }
      if(!swapped) 
        break
    }
    return arr 
  }



  // 选择法排序

let selectionSort = (arr) => {
  let len = arr.length
  let temp
  for (let i = 0; i < len - 1 ; i++ ) {
    temp = i
    for (let j = i; j < len ; j++ ) {
      if(arr[temp] > arr[j])
        temp = j
    }
    if(i !== temp)
      swap(arr , i , temp)
    }
    return arr
  }

  























let arr = Array(10).fill(0).map(it => Math.random() * 10000 | 0)
// console.log(bubbleSort(arr))
console.log(selectionSort(arr))

