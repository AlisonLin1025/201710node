let fs = require('fs');
// 可写流 默认要占用16384 = 16k
let ws = fs.createWriteStream('./1.txt',{highWaterMark:2});
// 可写流有两个方法 write end
var flag = ws.write(1+''); // 可写流来些数据必须时字符串类型或者buffer类型
console.log(flag);
var flag = ws.write(1+'');
console.log(flag);
var flag = ws.write(1+'');
console.log(flag);
// ws.end('吃饱了'); // end调用后会把所有的write中的内容以最快速度写入文件
//ws.write(1+''); //write after end 调用end后不能在用write
ws.on('drain',function () { // 当读入的文件 全部写入后 就恢复读取
    console.log('吃完了');
})

