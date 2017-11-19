let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);
// async await es7语法 node版本至少是7.9+
/*read('./1.txt','utf8').then(function (data) {
    return read(data,'utf8');
}).then(function (data) {
    return data+'姜文'
}).then(function (data) {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});*/
// await后面只能跟随promise 终极解决方案
async function result () {
    let content1 = await read('./1.txt','utf8');
    let content2 = await read(content1,'utf8');
    let str = content2+'姜文';
    console.log(str);
}
result();