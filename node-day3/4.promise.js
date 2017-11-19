let fs = require('fs');
// promise resolve成功 reject失败 实例上有个then方法，方法中有两个参数，success，error
let util = require('util');
let read = util.promisify(fs.readFile);
// 只有promise实例可以调用then
read('./1.txt','utf8').then(function (data) {
    return read(data,'utf8'); //如果第一个promise中返回了一个promise实例，会把当前执行的结果传到下一个then中
}).then(function (data) {
    // 如果你返回的不是promise 会把结果结果继续向下传递
    return data+'姜文'
}).then(function (data) {
    console.log(data);
}).catch((err)=>{
    // 处理错误,如果写了错误callback走自己的，没写同一走catch
    console.log(err);
});
// 流程控制 chain


// 自己封装promise
/*function read(url) {
     return new Promise((resolve,reject)=>{
     fs.readFile(url,'utf8',function (err,data) {
     if(err) return reject(err);
     resolve(data);
     })
     });
}*/

/*

fs.readFile('./1.txt','utf8',function (err,data) { // err错误第一
    if(err)return console.log(err);
    fs.readFile(data,'utf8',function (err,data) {
        if(err)return console.log(err);
        console.log(data);
    });
});
*/
