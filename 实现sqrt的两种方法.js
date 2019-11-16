function sqrtBisection(n) {
    // 二分法查找平方根；
    if (isNaN(n)) return NaN;
    if (n === 0 || n === 1) return n;
    var low = 0,
        high = n,
        pivot = (low + high) / 2,
        lastPivot = pivot;
    // do while 保证执行一次
    do {
        // console.log(low, high, pivot, lastPivot)
        if (Math.pow(pivot, 2) > n) {
            high = pivot;
        } else if (Math.pow(pivot, 2) < n) {
            low = pivot;
        } else {
            return pivot;
        }
        lastPivot = pivot;
        pivot = (low + high) / 2;
    }
    // 2018-04-25 22:08 更新
    // 使用Number.EPSILON表示能够接受的最小误差范围
    while (Math.abs(pivot - lastPivot) >= Number.EPSILON)

    return pivot;
}



function sqrtNewton(n) {
    // 牛顿法查找平方根
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return n
    var val = n,
        last;
    do {
        // console.log(val, last)
        last = val;
        val = (val + n / val) / 2;
    }
    // 2018-04-25 22:08 更新
    // 使用Number.EPSILON表示能够接受的最小误差范围
    while (Math.abs(val - last) >= Number.EPSILON)
    return val
}




console.log(sqrtBisection(7265492456));
//244ms;
console.log(sqrtNewton(7265492456));
//210ms;
