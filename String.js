//字符串的遍历
for(var str of 'lixuan'){
    console.log(str);
}
//包含，寻找字串的新方法
(function(){
    var str = 'hello,world!';
    //includes() 判断是否含有某个子串
    console.log(str.includes('hello'));//true
    console.log(str.includes('helle'));//false
    //startsWith()  判断是否以某个字串开头
    console.log(str.startsWith('hello'));//true
    console.log(str.startsWith('ae'));//false
    //endsWith()    判断是否以某个字串结尾
    console.log(str.endsWith('!'));//true
    console.log(str.endsWith('.'));//false
    //repeat(n) 返回一个新字符串，表示将原字符串重复n次
    console.log(str.repeat(3));//hello,world!hello,world!hello,world!
    console.log(str.repeat(NaN));// 空串，NaN代表0次
}());

//模板字符串
//用``标识，可以实现换行字符串，不用‘\n’
//变量的引入用${}
(function(){
    var a = 9;
    console.log(`hello,i'm${a}`);//hello,i'm9
    console.log(`hello,
    i'm${a}`);//hello,
                //i'm9
    //标签模板
    console.log(concat`hello,i'm${a}`);
    function concat(strArr){//拼接模板字符串
        var result = '',i=0;
        while(i<strArr.length){
            result+=strArr[i++];
            if(i<arguments.length){
                result+=arguments[i];
            }
        }
        
        return result;
        
    }
}());



(function(){
    console.log(String.fromCharCode(88));//将特定ascci码转化为字符
    console.log('aa'.charCodeAt(0));//输出字符床特定位置的ascci码值
}());