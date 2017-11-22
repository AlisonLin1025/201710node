// 30b 读取4b 5次 读取第一次就开始写 只能写1b，暂停读取，当drain后在恢复读取
let fs = require('fs');
function copy(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    rs.pipe(ws); // 可读流.pipe(可写流),会自动调用write和end方法
}
copy('1.txt','2.txt');
// 200 404 301 302 403 502
// 通过流可以实现分段 但是 不关心文件中的内容，readFile 可以看到文件中的具体内容