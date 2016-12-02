//属性和方法的简写


//对象属性的简写
var date = new Date();
var age = 21;
var name = 'lixuan';
var person = {date,age,name};
console.log(person);//{ date: 2016-12-02T04:17:03.626Z, age: 21, name: 'lixuan' }
//直接使用变量创建对象，默认变量的标识名组成的字符串作为对象的属性，变量的值作为属性值。

//上面的写法等效于
var person1 = {date:date,name:name,age:age};
console.log(person1);//{ date: 2016-12-02T04:17:03.626Z, age: 21, name: 'lixuan' }


//对象中方法的简写
//在ES5中
person = {
    date:date,
    age:age,
    name:name,
    say:function(){
        console.log('hello,world!');
    }
}

//在ES6中
person = {
    date,age,name,//属性的简写
    say(){//方法的简写
        console.log('hello,world!');
    }
}

console.log(person);
/**
 * { date: 2016-12-02T04:27:37.299Z,
  age: 21,
  name: 'lixuan',
  say: [Function: say] }
 */

//属性的简写用于函数的返回值

function getPoint(x,y){
    return {x,y};
}

console.log(getPoint(2,3));//{ x: 2, y: 3 }


//属性表达式的使用

person = {
    ['name']:'lixuan'//在ES5中只能用标识符来命名属性，即{name:'lixuan'}
}

console.log(person);//{ name: 'lixuan' }

var name='lixuan';

//console.log({[name]})//报错，属性表达式和属性的简写不能同时使用

//也可在函数中对方法名使用表达式
person = {
    name,
    ['say'](){
        console.log('hello.wrold!');
    }
}

console.log(person);//{ name: 'lixuan', say: [Function: say] }


//对象函数的name属性
console.log(person.say.name);//say

//判断两个值是否严格相等
console.log(Object.is(NaN,NaN));//true  用ES5中的===是不相等的，这个方法补充了这个缺点
console.log(Object.is(+0,-0));//false  用ES5中的===是相等的，这个方法补充了这个缺点


//对象的合并函数  只能浅层合并，若属性是对象类型只会复制引用
var target = {};
var s1 = {a:2,b:{x:3,y:5}};
var s2 = {c:3,name:'lixuan'};
Object.assign(target,s1,s2);
console.log(target);//{ a: 2, b: 4, c: 3, name: 'lixuan' }
//该方法的第一个参数为目标对象（要合并到哪个对象），后面的参数为要合并的对象

s1.b.x = 5;
console.log(target.b.x);//5  因为属性’b‘为对象类型，复制的是引用，所以当源对象中的属性值发生改变时，目标元素中的属性值也发生改变
Object.assign(target,{b:{z:6}});
console.log(target);//{ a: 2, b: { z: 6 }, c: 3, name: 'lixuan' }
//当合并的对象中有和目标对象重名的属性，则会覆盖目标对象中的属性，而不会合并。

//当传入的参数只有一个目标对象，直接返回目标对象；
console.log(Object.assign({a:3}));//{ a: 3 }

//当目标对象为非对象类型时，会将其转化为对象
console.log(typeof Object.assign(3));//object

//当不能转化为对象类型时，会直接报错
//console.log(typeof Object.assign(undefined));//"Cannot convert undefined or null to object"

//当传入的源对象为非对象类型时，除了会将字符串转化为数组外，其他的自动忽略
console.log(Object.assign({},2,'lixuan',true,undefined));//{ '0': 'l', '1': 'i', '2': 'x', '3': 'u', '4': 'a', '5': 'n' }

//该方法可用于为对象添加属性和方法

person = {};
say = function(){
    console.log('hello,world');
}

console.log(Object.assign(person,{name:'lixuan',say}));//{ name: 'lixuan', say: [Function: say] }

//克隆对象
var person2 = Object.assign({},person);
console.log(person2);//{ name: 'lixuan', say: [Function: say] }


//Object.assign方法会跳过不可枚举的属性
Object.defineProperty(person,'name',{enumerable:false});
console.log(Object.assign({},person));// { say: [Function: say] } 没有了name属性



//设置对象原型对象，Object.setPrototypeOf方法
var proto = {x:3};
Object.setPrototypeOf(person,proto);
console.log(person.x);//3
console.log(Object.keys(person));//['say'] Object.keys()只会遍历对象自己的可枚举属性

//获取对象原型，Object.getPrototypeOf方法
console.log(Object.getPrototypeOf(person));//{ x: 3 } 即proto
console.log(Object.getPrototypeOf(Object.prototype));//null  Object类是所有类的父类，因此它的原型为null


//属性的遍历

//for...in
for(prop in person){
    console.log(prop);//say x   for...in 会遍历对象自己的和继承来的所有可枚举属性
}

//Object.keys()
console.log(Object.keys(person));//[ 'say' ]  Object.keys会遍历对象自己的可枚举属性


//Object.getOwnpropertyNames()
console.log(Object.getOwnPropertyNames(person));//[ 'name', 'say' ]  Object.getOwnpropertyNames会遍历对象自己的所有属性，不管属性是否可枚举

//Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(person));//[]  Object.getOwnPropertySymbols遍历对象的所有Symbol属性

//Reflect.ownKeys()
console.log(Reflect.ownKeys(person));//[ 'name', 'say' ] Reflect.ownKeys遍历对象自己的所有属性（包括symbol），不管是否可枚举

 
