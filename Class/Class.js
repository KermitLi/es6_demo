class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    move(x,y){
       this.x += x;
       this.y +=y;
    }
    
    print()
    {
        console.log(this.x+','+this.y);
    }
    
    distance(point){
        return Math.sqrt((this.x-point.x)*(this.x-point.x)+(this.y-point.y)*(this.y-point.y)).toFixed(2);
    }
}

var point = new Point(2,3);
point.move(1,1);
point.print();
console.log(point.distance(new Point(0,0)));

//使用Class定义的类里面的方法是不可枚举的
console.log(Object.keys(Point.prototype));//[]
console.log(Object.getOwnPropertyNames(Point.prototype));//[ 'constructor', 'move', 'print', 'distance' ]

//Class也可用表达式进行定义
/*var Person = class {
    contructor(name){
        this.name = name;
    }
}*/
console.log(person);//Person {}

//私有方法
var think = Symbol('think');
class Person {
    constructor(name){
        this.name = name;
        //this.say=this.say.bind(this);
        this.say = ()=>console.log(`i'm ${this.name}`)
    }

    _think(){
        console.log('i can think!');//通过在方法名前加上下划线，但是这只是一种约定，外部仍可以访问
    }

    [think](){
        console.log('i can think!');//利用Symbol值的唯一性也可实现
    }

    static eat(){
        console.log('person can eat');
    }
}

var person = new Person('name');

//class中this的指向，一般指向类的实例，但若单独使用指向当前环境。
person.say();//i'm name
var {say} = person;
say();//Cannot read property 'name' of undefined

//解决办法1：在构造函数绑定this。
//解决办法2：使用箭头函数

//class的name属性
console.log(Person.name)//Person 显示类的类名



//class中的继承

//使用extends关键字实现继承
//注意：（1）子类的构造方法中第一条语句是调用父类的构造方法
//      （2）子类的构造方法中的this必须在调用父类的构造方法后使用

class Student extends Person{
    constructor(name){
        super(name);
        this.say = ()=>console.log(`i'm a student my name is ${this.name}`);
    }
}

var student = new Student('lixuan');
student.say();//i'm a student my name is lixuan  重写了父类中的方法
student._think();//子类可调用父类中的方法

//子类的__proto__属性指向父类，子类的prototype属性的__proto__指向父类的原型

//可以通过Object.getPrototypeOf()方法获取一个类的父类
console.log(Object.getPrototypeOf(Student));//[Function: Person]


//继承原生对象
class MyArray extends Array{
    constructor(){
        super();
    }
}

var myArray = new MyArray();
myArray.push(2,3,4);
console.log(myArray);//MyArray [ 2, 3, 4 ]

//class上的set和get函数
/*class SetAndGet{
    get val(){
        return this.val;
    }
    set val(value){
        this.val = value;
    }
}

var setandget = new SetAndGet();
setandget.val = 'hello';
console.log(setandget.val);
*/

//class 中的和静态方法  在类中的方法名前加上关键字static
Person.eat();//person can eat
//静态方法只能用类名调用
//person.eat();//person.eat is not a function

//new.target 用来判断当前是不是构造调用，不是用new关键字调用返回undefined
//在类的内部调用返回当前类
function Target(){
    console.log(new.target);
}
Target();//undefined
new Target()//[Function: Target]

class myClass{
    constructor(){
        console.log(new.target);
    }
}

new myClass();//[Function: myClass]

//由此可用来判断构造方法是不是用new关键字调用