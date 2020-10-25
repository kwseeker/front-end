//变量提升和函数提升发生在预解析阶段

//示例1
console.log("*******************************************");
function fn1() {
    console.log(num);
    var num = 100;
    console.log(num);
}
fn1();
//预编译等效代码
// function fn1() {
//     var num;
//     console.log(num);    //undefined
//     num = 100;
//     console.log(num);    //100
// }

//示例2
console.log("*******************************************");
console.log(a);
var a = 10;
console.log(a);
function fn2() {
    console.log(a);
    var a = 1;          //如果这里
    console.log(a);
}
fn2();
console.log(a);
//预编译等效代码
// var a;
// console.log(a);      //undefined
// a = 10;
// console.log(a);      //10
// function fn2() {
//     var a;
//     console.log(a);  //undefined
//     a = 1;
//     console.log(a);  //1
// }
// fn2();
// console.log(a);      //当前作用域a还是10

//示例3
console.log("*******************************************");
console.log(fn3);
var fn3 = 1;
console.log(fn3);
var fn3 = function() {
    console.log('fn3 1');
}
function fn3() {
    console.log('fn3 2');
}
console.log(fn3);
//预编译等效代码
// var fn3;
// function fn3() {
//     console.log('fn3 2');
// }
// console.log(fn3);           //函数 fn3 2
// fn3 = 1;
// console.log(fn3);           //1
// fn3 = function() {
//     console.log('fn3 1');   
// }
// console.log(fn3);           //函数 fn3 1

//示例4
console.log("*******************************************");
function fn4(){
    console.log(p42);
    if(p41){
        var p42 = 100;
    }
    p43 = 234;
    console.log(p43)
}
var p41;
fn4();
p41 = 10;
//预编译等效代码
// var p41;
// var p42 = 1000;
// function fn4(){
//     console.log(p42);       //undefined
//     if(p41){                //false
//         var p42 = 100;      
//     }           
//     p43 = 234;
//     console.log(p43)        //234, window.p43=234;
// }
// fn4();
// p41 = 10;
// console.log(p43);           //234, 全局变量（window的属性全局都可以访问）
