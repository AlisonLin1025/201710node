let fs = require('fs');
let {promisify} = require('util');
let read = promisify(fs.readFile);
/*let x = fs.readFileSync('./x.txt','utf8');
let y = fs.readFileSync('./y.txt','utf8');
console.log({x,y});*/
// 将两个异步请求在同一时刻内拿到 结果进行合并
let school ={};
read('x.txt','utf8').then(data=>{
    school.name = data;
    out()
},err=>{

});
read('y.txt','utf8').then(data=>{
    school.age = data;
    out()
},err=>{
    
});
function out() {
    if(school.name&&school.age) console.log(school)
}