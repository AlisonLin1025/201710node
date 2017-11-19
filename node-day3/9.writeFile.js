let fs = require('fs');
// 读取都是类型都是buffer 写入的时候utf8
// 读取的文件必须存在，写的时候文件不存在会自动创建，里面有内容会覆盖掉
// 默认会调用toString方法
fs.writeFile('1.txt','{name:1,age:2}',function (err) {
    console.log(err);
});

fs.writeFileSync('1.txt','{name:1,age:2}');