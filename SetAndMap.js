//Set和Map结构

//Set集合里面的元素是没有重复的

//可使用new Set()创建Set对象

var set = new Set();

//也可通过数组,类数组创建Set对象

set = new Set([1,2,3,3,5,4,5]);
console.log(set);//Set { 1, 2, 3, 5, 4 }

//通过add方法向Set对象添加元素
set.add(6);
console.log(set)//Set { 1, 2, 3, 5, 4, 6 }
set.add(3);//若添加集合中已经存在的元素，则不会添加进去
console.log(set);//Set { 1, 2, 3, 5, 4, 6 }
console.log(set.delete(3));//true 通过delete方法删除元素,返回一个布尔值，表示是否删除成功
console.log(set);//Set { 1, 2, 5, 4, 6 }
console.log(set.has(5));//true has方法判断是否含有某个元素，返回一个布尔值
console.log(set.size);//5  size属性是判断Set对象含有几个元素
//set.clear()//clear方法用于清空Set对象中的所有元素
//console.log(set.size);//0

//用于遍历的元素
console.log(set.keys());//SetIterator { 1, 2, 5, 4, 6 }
//keys()返回一个Iterator对象，包含Set对象中键的集合

console.log(set.values());//SetIterator { 1, 2, 5, 4, 6 }
//keys()返回一个Iterator对象，包含Set对象中值的集合
//由于在Set对象中键和值相等，因此返回结果一样

console.log(set.entries());//SetIterator { [ 1, 1 ], [ 2, 2 ], [ 5, 5 ], [ 4, 4 ], [ 6, 6 ] }
//entries()返回一个Iterator对象，包含Set对象中键值对的集合

set.forEach(function(val,index,set){//forEach方法用于遍历Set对象中的元素
    console.log(val);// 1 2 5 4 6
});

//Set对象和数组的相互转化

//将数组转化为Set对象
var array = [4,5,6,2,3,1];
set = new Set(array);
console.log(set);//Set { 4, 5, 6, 2, 3, 1 }

//Set对象转化为数组
array = [...set];
array = Array.from(set);
console.log(array.join());//4,5,6,2,3,1

//利用Set对象对数组进行去重
console.log([...new Set([1,3,4,2,3,4])].join());//1,3,4,2

//Set对象也可间接使用数组中的方法
console.log(new Set([...set].filter(val=>val>3)));//Set { 4, 5, 6 }



//WeakSet对象
//和Set对象有两个区别，1、只能存放对象类型的元素2、不能遍历
var ws = new WeakSet();
//也可通过数组，类数组对象创建，但是数组或类数组对象的成员必须是对象类型
//ws = new WeakSet([2,3,4]);//Invalid value used in weak set 报错
ws = new WeakSet([[1,2],[3,4,5]]);
ws.add({x:1,y:2});//通过add方法添加元素
console.log(ws.delete({x:1,y:2}));//false 通过delete删除元素
console.log(ws.has([1,2]));//false 判断是否含有某个元素



//Map结构  ，Map内的元素都是以键值对的形式存在
//可以使用数组创建Map对象，但是数组成员必须是由键值对组成的数组

var map = new Map([['张三','男'],['李四','男'],['小花','女']]);
console.log(map);//Map { '张三' => '男', '李四' => '男', '小花' => '女' }
map.set('王麻子','男');//使用set方法向Map对象中添加元素
console.log(map);//Map { '张三' => '男', '李四' => '男', '小花' => '女', '王麻子' => '男' }
console.log(map.get('kermit'));//undefined get方法根据键来获取对应的值，若不存在返回undefined
console.log(map.get('张三'));//男
console.log(map.delete('张三'));//true  使用delete方法根据key来删除元素，返回一个布尔值表示是否删除成功
console.log(map.has('张三'));//false  判断是否含有某个元素
console.log(map.size);//3 表示Map对象中含有元素的多少
//map.clear() //清空Map对象的元素

//Map对象的遍历

console.log(map.keys());//MapIterator { '李四', '小花', '王麻子' }  返回Map对象键的集合(iterator对象)
console.log(map.values());//MapIterator { '男', '女', '男' }  返回Map对象值的集合(iterator对象)
console.log(map.entries());//MapIterator { [ '李四', '男' ], [ '小花', '女' ], [ '王麻子', '男' ] }
//返回Map对象键值对的集合(iterator对象)

map.forEach((key,val)=>console.log(`key:${key},val:${val}`));
/**
 *  key:男,val:李四
    key:女,val:小花
    key:男,val:王麻子
 */

//Map对象使用数组方法
console.log(new Map([...map].filter(([k,v])=>k==='小花')));//Map { '小花' => '女' }



//weakMap 
//与Map的区别，只接受对象作为键名，还有就是无法遍历
var wm = new WeakMap([[{name:'lixuan'},21]]);//使用数组创建WeakMap对象
//wm = new WeakMap([['lixuan',21]]);//Invalid value used as weak map key  当键名不是对象时报错
wm.set({name:'张三'},22);//使用add方法添加元素
console.log(wm.get({name:'张三'}));//undefined 使用get方法获取值
console.log(wm.delete({name:'张三'}));//false delete方法用于删除元素
console.log(wm.has({name:'张三'}));//false 判断是否含有某个元素的值
