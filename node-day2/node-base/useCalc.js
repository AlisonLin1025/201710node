// 在这里调用求和方法
let calc = require('./calc');
console.log(require);
// require方法具有缓存功能，多次引用只执行依次

//console.log(calc(1, 2, 3, 4, 5));
//console.log(calc.b(1,2,3,4,5));
// console.log(global.sum(1, 3, 4, 5, 6));