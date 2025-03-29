//ES6之前没有类的概念
//模拟构造方法
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log("eat ...");
    }
}
//创建对象
var someone = new Person("Eric", 25);
//拓展属性
someone.speak = function() {
    console.log("speak ...");
}
someone.eat();
someone.speak();

//ES6引入类后