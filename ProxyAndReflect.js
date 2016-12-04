//Proxy  主要在执行一些操作之前执行一些拦截，但是执行拦截操作的不是对象本身而是Proxy对象，所以也正如它字面上的意思‘代理’

//Proxy对象的构造函数的形式   Proxy(target,handler)  第一参数为要拦截的目标对象，第二个操作为要拦截对象的属性，和对应的行为
var person = {name:'lixuan',age:21};
var handler = {
    get(target,prop){//对于获取属性的拦截
       return prop==='name'?'hello':target[prop];
   },
   set(target,prop,value){//对于设置属性值的拦截
       target[prop]=prop==='age'?(value>18?value:18):value;
       return true;
   },
   has(target,prop){//对于是否含有某个属性的拦截  in 操作
       if(prop==='age'){
           console.log('age is hidden!');
           return false;
       }
       return prop in target;
   },
   getPrototypeOf(target){//拦截Object.getPrototypeOf操作
      return {x:'1'};
   },
   isExtensible(target){//对于目标对象是否可扩展进行拦截，返回值必须保证和不拦截的时候相等。
       console.log('is Extensible!');
       return true;
   },
   ownKeys(target){//对于Object.getOwnPropertyNames的拦截
       return ['hello','world'];
   },
   setPrototypeOf(target,proto){
       throw new Error('Changing the prototype is forbidden');
   }
};
var proxy = new Proxy(person,handler);
var fn = function(){};
var proxy_fn = new Proxy(fn,{
    apply(target,thisArgs,args){
        console.log('this is Proxy');//对于将调用、apply、call时的拦截,目标对象必须是方法
    }
});

console.log(proxy.name);//hello  因为之前对获取属性的方法进行了拦截，所以返回hello
proxy.age = 12;
console.log(proxy.age);//18  在设置属性值的时候，进行了拦截，若设置的小于18，则设为18；
proxy_fn();//this is Proxy  对fn方法的调用进行了拦截。
console.log('age' in proxy);//age is hidden! false 对判断是否属性的操作进行了拦截
console.log(Object.getPrototypeOf(proxy));//{ x: '1' }
console.log(Object.isExtensible(proxy));//is Extensible! true
console.log(Object.getOwnPropertyNames(proxy));//[ 'hello', 'world' ]
//Object.setPrototypeOf(proxy,{}); //报错



//Proxy.revocable()  创建一个可取消的Proxy实例  返回值为一个Proxy实例和一个取消方法  我自己当前的编辑器不支持
// var [proxy1,revoke] = Proxy.revocable({name:'kermit',age:21},handler);
// console.log(proxy1.age);


//Reflect 主要是将Object上的APIyizhi到Reflect上，以后Object也不会这些方法，也添加和改进了一些原来的方法
//最后Reflect上的行为和Proxy是一一对应的，也就是说Proxy对象中存在的方法，Reflect都有，因此在改变在需要在默认行为中添加额外功能时，
//先调用Reflect中的默认行为，再添加额外的功能，它是Proxy拦截的基础。

//属性相关

//获取属性的get方法

var lixuan = {name:'kermit',age:21}

console.log(Reflect.get(lixuan,'name'));//kermit

//设置属性的set方法
Reflect.set(lixuan,'name','lixuan');
console.log(Reflect.get(lixuan,'name'));//lixuan

//删除属性的deleteProperty方法
Reflect.deleteProperty(lixuan,'age');
console.log(lixuan.age);//undefined

//判断是否含有某个属性
console.log(Reflect.has(lixuan,'age'));//false

//获取对象的所有属性
console.log(Reflect.ownKeys(lixuan));//[ 'name' ]

//定义属性
Reflect.defineProperty(lixuan,'sex',{
    value:'M',
    configurable:false
});

console.log(lixuan.sex);//M


//获取属性描述符 

console.log(Reflect.getOwnPropertyDescriptor(lixuan,'sex'));
/**
 * { value: 'M',
  writable: false,
  enumerable: false,
  configurable: false }
 */

//原型相关

//设置对象原型
Reflect.setPrototypeOf(lixuan,person);

//获取对象原型
console.log(Reflect.getPrototypeOf(lixuan));//{ name: 'lixuan', age: 18 }

//方法有关的

//方法调用
function say(){
    console.log(`name:${this.name},age:${this.age}`);
};
Reflect.apply(say,lixuan,[]);//name,lixuan,age:18

//对象相关

//构造方法的调用

function Animal(name){
   this.name = name;
}

console.log(Reflect.construct(Animal,['dog']));//Animal { name: 'dog' }


//组织对象扩展（添加新属性）
Reflect.preventExtensions(lixuan);

//判断对象是否可扩展
console.log(Reflect.isExtensible(lixuan));//false