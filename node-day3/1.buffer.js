/*
let sum = 0;
for(var i = 1;i<=8;i++){
    sum +=Math.pow(2,i-1)
}
console.log(sum)*/

// 1.通过长度创建
var buffer = Buffer.alloc(100); // 相对这种方法比较耗性能
console.log(buffer);
var buffer = Buffer.from([17,18,19,0x11]);// 会自动把10进制转化成16进制
console.log(buffer);
var buffer = Buffer.from('珠峰培训');
console.log(buffer.length); // 转化成buffer后长度为buffer的长度
console.log(buffer.toString());

//1)fill方法
var buffer = Buffer.allocUnsafe(100);
buffer.fill(0);
console.log(buffer);
//2)slice方法 （截取，克隆：深(递归循环,parse(stringify)),浅(slice assign,{...{}})）
// 深拷贝 就是两个人长的一样但是毫无关系，浅拷贝就是两个对象中存放的空间是一样的
var obj = {name:{name:'zfpx'}};
var newObj = JSON.parse(JSON.stringify(obj));
/*var obj = {name:'zfpx'};
var arr = [obj,2,3];
var newArr = arr.slice(0);
arr[0].name = 'hello';
console.log(newArr);

var obj = {name:{name:'zfpx'}};
var newObj = Object.assign({},obj);
obj.name.name = 'hello';
console.log(newObj);*/

var buffer = Buffer.from([1,2,3]);
var newBuffer = buffer.slice(0,1); // 拷贝出来的存放的是内存地址空间
newBuffer[0] = 100;
console.log(buffer);

var buf1 = Buffer.from('珠峰');
var buf2 = Buffer.from('培训');
var buf = Buffer.allocUnsafe(12);
// 拷贝buffer(copy)
//targetBuffer目标buffer, targetStart目标的开始, sourceStart源的开始, sourceEnd源的结束 this.length
buf1.copy(buf,0);
buf2.copy(buf,6);
console.log(buf.toString());
// 连接buffer
//console.log(Buffer.concat([buf1, buf2,buf3]).toString());
Buffer.MyConcat = function (list,totalLength) {
    //1.判断长度是否传递,如果传递了用传的，没传就自己算一个总长度
    if(typeof totalLength === 'undefined' ){
        totalLength = list.reduce((prev,next)=>prev+next.length,0);
    }
    //2.通过长度创建一个这么大buffer Buffer.alloc(len)
    let buffer = Buffer.alloc(totalLength);
    //3.在循环list将每一项拷贝到这个大buffer上 buf.copy
    let offset = 0;
    list.forEach(buff=>{ // isBuffer判断当前是不是buffer类型
        if(!Buffer.isBuffer(buff)){throw new Error('not buffer')}
        buff.copy(buffer,offset);
        offset += buff.length;
    });
    //4.如果长度过长 fill 或者可以采用slice截取有效长度
    //5.返回一个新buffer
    return buffer.slice(0,offset)
};
console.log(Buffer.MyConcat([buf1, buf2,buf1]).toString());



