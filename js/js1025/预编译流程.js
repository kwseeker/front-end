scopeTest('global');            
function scopeTest(scope){
    console.log(scope);
    var scope = "local";
    function scope(){
    }
    console.log(scope);
}   
//打印结果为：
// function scope(){}
// local

//上面代码预编译后
function scopeTest(scope){ 
    var scope;
    function scope(){       //同名的函数和变量，函数覆盖变量(?是不是预编译后同名函数位于同名变量声明之后的原因，后面覆盖前面)
    }
    console.log(scope);     //2）AO{scope: function scope{}}
    scope = "local";
    console.log(scope);     //3) AO{scope:'local'}
}
scopeTest('global');        //1) AO{} => AO{scope:undefined} => AO{scope:'global'}

/*
预编译发生在函数执行的前一刻，首先按步骤来:
第一步，创建AO对象，AO{ }；
第二步，按第2条来，形参名为scope，且函数中的变量声明中也有一个scope，虽然两者同名，但是在AO对象中只会存储一个scope，得出 AO{ scope：undefined} ；
第三步，按第3条来，将实参值和形参统一，也就是，将实参中传递过来的值赋值给形参中用到的变量，得出 AO{scope：“global”} ；
​第四步，找函数体中的函数声明，值赋予函数体 ，我们很容易看到，函数scopeTest中，包含了一个函数scope的声明且函数名scope与AO对象的scope同名，而AO对象对待同名也只能存储一个，
        接着按照第4条，将函数体赋给AO对象中的scope，得出 AO{scope：function scope(){ }} ；
​预编译结束 ，然后一步一步执行代码。第一行调用scopeTest(‘global’)函数，最开始输出scope的值，电脑会从AO对象里面拿东西，里面scope存储的值为function scope(){}, 然后输出函数。
        接着继续执行代码，scope重新赋值，scope= “local”； 然后 function scope(){}之前已经在预编译中获取了，当前可不必理会，
        最后再次需要输出scope中的值，现在AO对象里面为：AO{scope：“local"}，所以输出local 。所以最后的结果为：function scope(){} local
*/