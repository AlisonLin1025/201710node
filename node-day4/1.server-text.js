let http = require('http');// 引用http模块
let port = 3000;
http.createServer((req,res)=>{ // 监听函数，当请求到来时会执行回调函数
    // req代表的是客户端 他是一个可读流
    // res代表的是服务端 他是一个可写流
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('你好');//调用end后结束响应
}).listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
});
// 端口号尽量使用3000以上端口