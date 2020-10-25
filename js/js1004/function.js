//函数定义
function fn1(a, b) {
    console.log(a + b);
}
fn1(1, 2);

// 函数表达式
var fn2 = function(a, b) {
    console.log(a + b);
}
fn2(1, 2);

// 使用Function对象定义一个函数
var fn3 = new Function('a', 'b', 'console.log(a + b);');
fn3(1, 2);
