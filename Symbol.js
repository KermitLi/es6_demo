//消除重名的属性
var s1 = Symbol();
var s2 = Symbol();
console.log(s1===s2);//false  用Symbol生成的值，任意两个都不可能相等
var s3 = Symbol('s3');//为了区分，可以给symbol字符加上描述
console.log(s1);//Symbol()
console.log(s3);//Symbol(s3) 

console.log(String(s3));//Symbol(s3),Symbol可转化为字符串
console.log(Boolean(s3));//true  Symbol也可转化为布尔值
//console.log(Number(s3));//报错  Symbol除了转化为字符串和布尔值，转化为其他类型都会报错


//作为属性名的Symbol
var person = {
    [s1]:'s1'//利用属性表达式
}
console.log(person[s1]);//s1
person[s1] = 's11';
console.log(person[s1]);//s11
//切记！ 访问Symbol属性的时候要使用属性表达式，而不是属性标识符，使用属性标识符访问，会访问对象的字符串属性

