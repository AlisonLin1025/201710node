let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url');
let path = require('path');
let mime = {
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
};
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    fs.stat('.'+pathname,function (err,stats) {
        if(err){
            res.statusCode = 404;
            res.end(`${pathname} not found`);
        }else if(stats.isFile()){ // /index.css  /index.js /index.html
            let extName = pathname.match(/\.\w+$/)[0];
            res.setHeader('Content-Type',mime[extName]+';charset=utf8');
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
