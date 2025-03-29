var arr = new Array();
var arr1 = [11, 12, 13, 14];
var arr2 = new Array(2);        //不受长度限制
arr[0] = 1;
arr1[4] = 15;
arr2[0] = 21;
arr2[1] = 22;
arr2[2] = 23;

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
console.log(arr);
// for (let j = 0; j < arr1.length; j++) {
//     console.log(arr1[j]);
// }
console.log(arr1);
// for (let k = 0; k < arr2.length; k++) {
//     console.log(arr2[k]);
// }
console.log(arr2);

arr2.push(24, 25);                  //在末尾添加，会改变原数组
arr2.unshift(18, 19, 20);           //在头部添加元素，会改变原数组
arr2.pop();                         //从末尾删除，会改变原数组
arr2.shift();                       //从头部删除，会改变原数组
arr2.reverse();                     //反转数组，会改变原数组
arr3 = arr2.slice(3, 5);            //截取索引 [3,5) 的元素
console.log(arr3);

console.log(arr2);
delArr = arr2.splice(1,2);           //从索引1开始删除两个元素
console.log(arr2);
arr2.splice(1, 0, 23.5, 22.5);       //从索引1开始插入元素（0表示插入）
console.log(arr2);
arr2.splice(1, 2, 23.9, 22.8);       //从索引1开始替换两个元素
console.log(arr2);

arr2 = arr2.concat(arr3);           //合并数组
arr2 = arr2.concat(99);
console.log(arr2);

arr2Str = arr2.join();              //数组连接成字符串（默认逗号拼接各个元素）
arr2Str = arr2.join('-')            //使用‘-’拼接元素
console.log(arr2Str);

arr2Str = arr2.toString();          //和join()默认效果一样
console.log(arr2Str);

// forEach indexOf filter map some every reduce

//forEach
arr2.forEach(function(value, index, array) {        //value是元素值，index是元素索引，array是原数组
    console.log(value, index, array);
});
arr2.forEach(function(value, index) {
    console.log(value, index);
});
arr2.forEach(value => console.log(value));          //简写方式， 类似java的 ->                         
console.log(this.arr3);
function Counter() {                                //thisArg参与用于对象中
    this.sum = 0;
    this.count = 0; 
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
};  
const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count, obj.sum);

//index
console.log(arr2.indexOf(20));      //找到一个立即返回，不会找所有的
//对arr2做元素去重
arr21 = new Array();
arr2.forEach((item, index) => {
    if(arr21.indexOf(item) === -1) {
        arr21.push(item);
    }
});
console.log(arr21);

//filter, 从原来数据中筛选元素放到新数组中
arrBig = arr2.filter(item => item >= 22);       //比如筛选数组中大于等于22的所有元素
console.log(arrBig);

//map
arrMap = arr2.map(item => item + 1);
console.log(arrMap);

//some 寻找满足条件的元素，找到一个即返回true
console.log(arr2.some(item => item > 50));

//every
console.log(arr2.every(item => item > 50));
console.log(arr2.every(item => item < 150));

//reduce
console.log(arr2.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}));
//reduceRight, 从右向左
console.log(arr2.reduceRight((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}));

itr = arr2.entries();
do {
    item = itr.next();
    console.log(item.value , item.done);
} while (item.done != true);

arr2.sort((a, b) => a-b);
console.log(arr2);
