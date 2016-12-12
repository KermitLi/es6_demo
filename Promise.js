//Promise  异步编程的一种实现方式

//Promise的构造方法
var flag = false;
var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(flag){
            resolve();
        }
        else{
            reject(new Error('failed!'));
        }
    },1000);
});

var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('promise1');
    },4000);
});

promise1.then(function(val){
    console.log(val+'success')
},function(val){ console.log(val+'fail')});



promise.then(function(){
    console.log('success!');
    return 'Suc';
},function(){
    return 'promise failed'
}).then(function(value){
    console.log(value+2);
    return promise1;
},function(value){console.log(value+'Error')}).then(function(){console.log('promise1 success2')});
/*
promise failed2
promise1success
promise1 success2
 */

//Promise中的resolve和reject方法：
/*
resolve方法执行的时候，表示当前的异步操作状态从Pending改变为resolved，并将参数作为结果返回
reject方法执行的时候，表示当前的异步操作状态从Pending改变为rejected，并将参数作为结果返回
若返回的结果是一个Promise对象，则当前Promise对象绑定的then方法绑定的对象由当前的Promise对象改变为返回的Promise对象;
若返回的结果为非Promise对象，，则将结果传入当前Promise对象绑定的then方法
否
*/


//Promise实例的then方法

/*then 方法是当promise的状态发生改变调用的方法（从Pending到resolved或rejected），gai方法传入两个参数，都是函数，第一个函数是当Promise的状态从Pending改变为resolveds
是调用的方法，第二个函数是当Promise对象的状态从Pending改变为rejeced时调用的函数，由于then函数返回的是一个Promise对象
因此then可以进行链式调用，若then中的回调函数返回一个Promise对象则then方法返回也返回这个Promise对象，若then中的回调函数没有返回值或者返回值为
非Promise对象，则then方法返回一个新的Promise对象，并且这个新的对象里立即执行以then中的回调函数返回值（非Promise对象或空）为参数的resolve函数。
*/


var promise3 = new Promise(function(resolve,reject){
    var flag = false;
    if(flag){
        resolve();
    }
    else{
        reject(new Error('rejected!'));
    }
});

promise3.then(function(){},function(err){
    console.log(err);
}).catch(function(err){
    console.log(err);
});
//上述肯定会有错误输出，但是错误是then中的函数输出的，因为reject将错误传到了then方法的第二个函数中，所以此时的catch语句没有起作用
//然而这种写法并不好，因为如果then中没有处理错误，错误也不会被catch捕获到，而且catch语句也可以捕捉前面then方法的错误
//因此一般then中的函数不用写，用catch代替

//Promise.all方法

//通过多个Promise对象来创建一个Promise对象，创建后的Promise对象的状态取决于这多个Promise对象的状态
//只有当这多个Promise对象的状态全部为resolved时，这个Promise对象的状态才为resolved，并且将这多个对象的返回值组成数组传入这个Promised对象的回调函数
//当这多个对象中有一个的状态变为rejected，创建后的Promise对象的状态变为rejected,并且将这多个对象中状态第一个变为rejected的对象的返回值传给这个Promise对象的回调函数
Promise.all([1,2,3,4,new Promise(function(resolve,reject){setTimeout(()=>reject('rejected'),2000)}),8]).then(
    (val)=>console.log(val),(val)=>console.log(val)
);//rejected

Promise.all([1,2,3,4,new Promise(function(resolve,reject){setTimeout(()=>resolve('resolved'),2000)}),8]).then(
    (val)=>console.log(val),(val)=>console.log(val)
);//[1, 2, 3, 4, "resolved", 8]


//Promise.race方法
//通过多个Promise对象来创建一个Promise对象，创建后的Promise对象的状态取决于这多个Promise对象的状态
//传入的多个对象中有状态率先改变的对象，创建后的Promise对象的状态也会跟着改变，状态率先改变的对象的返回值传入创建后的Promise对象的回调函数
Promise.race([1,2,3,4,new Promise(function(resolve,reject){setTimeout(()=>resolve('resolved'),2000)}),8]).then(
    (val)=>console.log(val),(val)=>console.log(val)
);//1


//Promise.resolve方法
//创建一个状态为resolved的Promise对象
//原理：创建一个新的Promise对象，调用其resolve方法，参数为传入的非Promise对象

//Promise.reject方法
//创建一个状态为rejected的Promise对象
//原理：创建一个新的Promise对象，调用其reject方法，参数为传入的非Promise对象
