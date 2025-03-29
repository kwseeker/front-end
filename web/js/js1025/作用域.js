//只是演示才这么写代码，真实场景基本不会这么写（功能界限混乱，难以维护）

var num = 10;

function func() {
    var num = 20;
    func2();
    // function func3() {
    //     console.log(num);
    // }
    // func3();     //改写成IIFE
    (function() {
        console.log(num);
    })();
}

function func2() {  //全局作用域定义的函数去找全局作用域的变量
    console.log(num);
}

func();             //10