//将类数组对象h和iterable集合（含有iterator接口的集合）转化为真正的数组
var array_like = {'0':1,'1':2,'2':3,length:3};
//array_like.push(4);//报错 类数组对象不能使用数组里面的方法
var array = Array.from(array_like);
array.push(4);
console.log(array.join());//1,2,3,4  将array_like转化为真正的数组
var set = new Set([1,2,3,4,4,3]);
set.forEach(function(val){console.log(val);});//1,2,3,4
var set_array = Array.from(set);
console.log(set_array.join());//1,2,3,4  将set对象转化为真正的数组

function convertToArray(){
    return Array.from(arguments);
}
console.log(convertToArray(3,4,5,5,6).join());//3,4,5,5,6  将参数对象转化为数组

console.log(Array.from('lixuan').join());//l,i,x,u,a,n  将字符串转化为数组

//Array.from还可以传入第二个参数，类似map方法对每个元素进行处理后返回
console.log(Array.from(array,function(item){return item*item}).join());//1,4,9,16 对每个数进行平方后返回

//Array.from也可以传入第三个参数，指定回调函数中this对象
console.log(Array.from(array,function(item){return item*item+this.a;},{a:2}).join())//3,6,11,18 对每个数平方加2后返回

//Array.of  用一些值创建数组
console.log(Array.of(2,3,4).join());//2,3,4

//数组实例的copyWithin  在数组内部，将一些值复制到其他位置，会覆盖原有位置上的元素
console.log([5,6,7,8,9].copyWithin(2,0,2).join());//5,6,5,6,9  第一个参数代表要替换元素的开始为，即7，第二个元素代表替换元素的开始位置，默认为0，即5，第二个元素代表替换元素的结束位置（不包括），默认为数组的长度
//即6  所以就是将数组中索引[0，2]的元素复制到索引为2的位置，并覆盖原来的元素

//数组实例的find 该传入一个回调函数，对每个元素执行该方法，返回第一个返回值为true的元素 没有返回undefined

console.log([2,3,4,5,6,7].find(function(item){return item>5}));//6 寻找数组中第一个大于5的元素

//数组实例的findIndex 该方法和find方法相似，区别在于该方法返回元素的索引，没有找到返回-1

console.log([2,3,4,5,6,7].findIndex(function(item){return item>5}));//4 寻找数组中第一个大于5的元素的索引

//数组实例的fill，用指定的值填充指定位置的元素
console.log([2,3,4,5].fill(0).join());//0,0,0,0 用0填充数组里面的所有元素

//也可传入第二个和第三个参数，指定填充位置的起始值和结束值，不传入的时候，起始值默认为0，结束值默认为数组的长度
console.log([2,3,4,5].fill(0,1,3).join());//2,0,0,5 //用0填充[1,3]的元素
console.log([2,3,4,5].fill(0,1).join());//2,0,0,0

//数组实例的keys方法  返回一个数组键（索引）的集合，为Iterator对象 可用for...of进行遍历
for(let key of [1,23,4,5].keys()){
    console.log(key);//0,1,2,3
}

//数组实例的values方法，返回数组值的集合，为Iterator对象  可用for...of进行遍历

// for(let value of [0,2,3,5].values()){
//     console.log(value);//不支持
// }

//数组实例的entries方法，返回数组键值对的集合，为Iterator对象  可用for...of进行遍历

for(let [key,value] of [2,3,4,6].entries()){
    console.log(key+','+value);//0,2 1,3 2,4 3,6
}

//数组实例方法keys、values、entries方法返回的Iterator对象 都可以用next方法进行遍历
var key_iterator = [0,2,3,5].keys();
console.log(key_iterator.next().value);//0
console.log(key_iterator.next().value);//1


