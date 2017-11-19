// process 进程 设置环境变量
// 在命令行里配置NODE_ENV，mac export/windows set
// 在webstorm中设置环境变量,
// 如果代码放到服务器上，那就没有此环境变量，取不到可以走上线环境
console.log(process.env.NODE_ENV);
let url = '';
if(process.env.NODE_ENV == 'dev'){
    url = 'http://localhost:3000';
}else{
    url = 'http://www.zhufengpeixun.cn';
}
console.log(url);
// 异步的，在当前队列的底部
process.nextTick(function () {
    //console.log(this)
});
// 第二个队列中的
setImmediate(function () {
   //console.log(this)
});
// 形参（剩余运算符） 将剩余的内容放到一个数组中,args中['吃饭']
// 拓展运算符 展开运算符
console.log([...[1, 2, 3], ...[4, 5, 6]]); //es6
console.log({...{school:'zfpx'},...{age:8}}); //es7语法
setTimeout((...args)=> { // this指向的是timeout自己,箭头函数中没有this指向没有arguments
    console.log(arguments);
},100,'吃饭');