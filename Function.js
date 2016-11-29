//函数参数默认值的设定

function f(a = 1,b = 2){
    return a+b;
}

console.log(f());//3  当没有实参传入时，使用默认参数值
console.log(f(3));//5 a=3 b=2

//与解构赋值结合设定函数参数默认值

function f1({a=1,b=2}){
    return a+b;
}

console.log(f1({a:3,b:4}));//7
console.log(f1({}));//3 使用默认值
//console.log(f1());//报错，没有传入函数参数对象，因此这种写法必须传入参数为一个对象，否则将会报错

function f2(a=0,{b=1,c=2}={}){
    return a+b+c;
}

console.log(f2());//3 这种写法给函数参数设定了默认值{}，当传入的参数为非对象的时候，使用函数参数默认值对解构赋值设定默认值
console.log(f2(4));//7   a变量采用传入的实参4，b和c采用函数参数默认值{}对解构赋值进行赋值，得到b=1，c=2

function f3(a=0,{b,c}={b:1,c:2}){
    return a+b+c;
}
//这种写法只是将解构赋值的默认值移到了函数参数默认值里,效果是一样的

//函数参数默认值总结（解构赋值结构）：当传入的实参为空或为非对象时，如果函数设定了函数参数默认值对象，函数默认参数对象会赋值给解构赋值结构，
//否则没有函数默认参数对象时，将会报错。当传入的实参为对象时，即使函数设定了函数参数默认值对象也毫无作用，传入的参数对象会直接对解构赋值解构进行赋值


//函数参数默认值的位置   
//当设定默认值的参数设定在参数体尾部时，可以省略设定默认值的参数
//当设定默认值的参数没有设定在参数体尾部时，而且参数体尾部有没有设定默认值的参数，此时设定默认值的参数不可以省略，除非用undefined代替，触发默认值

function f4(a=3,b){
    return a+b;
}

//console.log(f4(,4))//报错
console.log(f4(undefined,3));//6  使用undefined触发默认值

function f5(a,b=4){
    return a+b;
}

console.log(4);//8 可以省略设置默认值的参数


//函数的length属性

function f5(a,b,c=8){
    return a+b+c;
}

console.log(f5.length);//2   length属性为函数参数中没有设置默认值参数的个数


//函数参数默认值的作用域
function f6(a,b=a){
   return a+b;
}

console.log(f6(4));//8  此时函数默认值设定的是函数中的一个形参，需要注意设置默认值时要保证变量已经被定义，获取变量值时会用当前作用域向上查找

var a_f7 = 6;
function f7(b=a_f7){
    return b;
}

console.log(f7());//6 f7作用域中无a_f7，会向父作用域中查找

function f8(x,f=function(){x=2;}){
    var x = 12;
    f();
    return x;
}

console.log(f8(4));//12  形参中的变量和函数体声明的变量互不影响  查找会先查找函数体中，再去查找形参中

//函数的可变参数列表，用于获取多余的参数

function f9(...numbers){
  return  numbers.reduce(function(pre,current){return pre+current;},0);
}

console.log(f9(2,4,5,6));//17  ...[variable_name]会将传入的参数放入一个数组

function addToArray(array,...items){
    array.push.apply(array,items);
    return array;
}

console.log(addToArray([1,2,3],4,5,6,7).join());//1,2,3,4,5,6,7 //向数组中添加元素

//扩展符...  将数组元素展开为元素序列

console.log(...[3,4,5]);//3 4 5 

//改写addToArray方法

function addToArray_(array,...items){
    array.push(...items); //items是一个数组，先将数组用...转化为参数序列，传入push方法中  原来不知道push方法还能一次传入多个值
}

//由此可以看出...代替apply方法，在es5中我们调用方法时，若参数是是以数组的形式传入，则我们需调用apply方法，将参数以数组形式传入
function sum(x,y){
    return x+y;
}

//es5中  
console.log(sum.apply(null,[3,4]));//7
//在es6中
console.log(sum(...[3,4]));//7

//...运算符的用处非常广  合并数组，与解构赋值结合和将实现Iterator接口的集合转化为真正的数组

//函数的name属性  返回函数的函数名
function f10(){}
console.log(f10.name);//f10
var f11 = function(){}
console.log(f11.name);//f11  在es5中显示为空串，因为f11是一个匿名函数赋值的

//箭头函数
var arrow_func = ()=>{console.log(this.a)};
arrow_func.apply({a:2});//undefined  箭头函数中的this引用其外部函数调用时的this对象，并不会改变  适用于回调函数(事件处理)




