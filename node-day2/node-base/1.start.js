// 在文件中打印this不是global属性，node自带模块化功能 一个js文件就是一个模块，模块this不是global （闭包）
console.log(this); // {}
var a = 1; // 每个文件都有局部作用域，不会将属性挂载在global上
console.log(global.a);
// 全局变量 可以不声明直接使用
console.log(global);
// console.info/error/warn/log/time/timeEnd
console.time('start');
for(let i = 0 ;i<100;i++){}
console.timeEnd('start');

// Buffer 缓存区
// clearImmediate setImmediate
// clearTimeout



