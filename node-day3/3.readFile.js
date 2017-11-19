// fileSystem 文件系统 文件的读写
let fs = require('fs');
// 既有同步又有异步方法，异步有callback

// 同步的读取
// 1.读取文件 文件必须存在。不能通过/读取内容 /表示的是根目录
// 2.读取的默认类型是buffer
let result = fs.readFileSync('3.fs.js','utf8');
console.log(result);
// 第一次的输出是下一次的输入
/*let content1 = fs.readFileSync('./1.txt','utf8');
let content2 = fs.readFileSync(content1,'utf8');
console.log(content2);*/
// 异步的方案 会导致回调地狱，不方便维护
fs.readFile('./1.txt','utf8',function (err,data) { // err错误第一
    if(err)return console.log(err);
    fs.readFile(data,'utf8',function (err,data) {
        if(err)return console.log(err);
        console.log(data);
    });
});

