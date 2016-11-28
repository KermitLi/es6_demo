//正则构造表达式
var regExp = new RegExp('[\\d]{2}','g');
console.log('a43b4356c'.match(regExp).join());//43,43,56
regExp = /\d{2}/g;
console.log('a43b4356c'.match(regExp).join());//43,43,56
regExp = new RegExp(/\d{2}/g);
console.log('a43b4356c'.match(regExp).join());//43,43,56
regExp = new RegExp(/\d{2}/g,'g');//此语法在es5中会报错
console.log('a43b4356c'.match(regExp).join());

//es6中的新修饰符y('粘连')

regExp = /a+/g;
console.log('aaa_aa'.match(regExp).join());//匹配成后后从剩余位置任意匹配匹配成后后从剩余位置的第一个位置粘连匹配
regExp = /a/yg;
console.log('aaa_aa'.match(regExp).join());//匹配成后后从剩余位置的第一个位置粘连匹配
//console.log('_aaa_aa'.match(regExp).join());//异常，因为粘连匹配时隐藏了头部匹配的标志^,保证了全局匹配时先进行头部匹配，因此开头不是’a‘匹配失败。
console.log('x##'.split(/#/y));//'x##',因为开头不是#，匹配失败
//sticky属性  检测是否含有y属性
console.log(regExp.sticky);
//flags属性   返回正则表达式的修饰符
console.log(regExp.flags);