let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url');
let path = require('path');
let mime = require('mime'); //实现类型转化
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method === 'OPTIONS'){
        res.end();
    }
    if(pathname === '/clock'){
        return res.end('2017.11.19');
    }
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            res.statusCode = 404;
            res.end(`${pathname} not found`);
        }else if(stats.isFile()){ // /index.css  /index.js /index.html
            res.setHeader('Content-Type',mime.getType(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else if(stats.isDirectory()){
            res.setHeader('Content-Type','text/html;charset=utf8');
            let p = path.join('.' + pathname, './index.html');
            fs.createReadStream(p).pipe(res);
        }
    });
}).listen(port,()=>{
    console.log(`服务器已经启动在${port}上`);
});
