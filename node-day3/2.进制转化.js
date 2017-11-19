// base64 进制转化
// 10-> 16 2 8
// 16 2 8 ->10
let buf = Buffer.from('珠');
// 把一个汉字的24位 转换成4个字节，每个字节就6位，不足的补0
console.log(buf);
//1.把16进制转化成2进制 toString()
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
// 00111001 00111000 00111110 00100000
//2.将这些值转化成10进制 去可见编码中取值 parseInt
console.log(parseInt('00111001', 2));
console.log(parseInt('00111000', 2));
console.log(parseInt('00111110', 2));
console.log(parseInt('00100000', 2));
// 57 56 62 32
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+='abcdefghijklmnopqrstuvwxyz';
str += '0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);