//判断一个数是不是有限的
console.log(Number.isFinite(Infinity));//false
console.log(Number.isFinite(2.3333));//true
//判断是不是NaN
console.log(Number.isNaN(2));//false
console.log(Number.isNaN(NaN));//true

console.log(Number.isFinite('2'));//false//与全局方法相比，这两个方法只对数值有效，不是数字统统返回false
console.log(isFinite('2'))//true  传统方法会将非数值转换为数值

//将parseInt方法和parseFloat方法一直到Number对象上
console.log(Number.parseInt(2.999));//2
console.log(Number.parseFloat(2));//2

//判断是不是整数
console.log(Number.isInteger(3.0))//true
console.log(Number.isInteger(3))//true  3与3.0为同一个数
//极小常量EPSILON
console.log(Number.EPSILON);
//判断一个数是否为安全数  安全数是介于-2^53~2^53之间的数  超出的数计算机自动取临界值
console.log(Number.isSafeInteger(Math.pow(2,54)));
var a = Math.pow(2,54)-1;

//去除数字的小数部分
console.log(Math.trunc(-0.0002));//-0
console.log(Math.trunc('aaa'));//NaN
//判断一个数是正数，负数，+0,-0,NaN
console.log(Math.sign(222));//1  整数返回1
console.log(Math.sign(-222));//-1 负数返回-1
console.log(Math.sign(+0));//0
console.log(Math.sign(-0));//-0

//计算立方根
console.log(Math.cbrt(4));

//计算所有数平方和的平方根
console.log(Math.hypot(3,4));

//新增指数运算符
//console.log(2 ** 4);不支持
//a**=2;//不支持，表示a = a*2;