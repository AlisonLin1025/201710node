let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url');
let path = require('path');
let mime = require('mime'); //实现类型转化
let users = [{username:'zfpx',password:'你好admin',id:1},{username:'zfpx',password:'admin',id:2}];
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/user'){ // 如果是访问/ user就是对用户的增删改成
        let id = query.id; //在查询参数中取出id 看是否有值 有值就表示操作的是某个
        console.log(req.method); //method方法全部大写
        console.log(req.headers); // 获取请求头 小写的
        switch (req.method){
            case 'GET':
                if(!id){ // 查询所有
                    res.setHeader('Content-Type','application/json;charset=utf-8');
                    res.end(JSON.stringify(users));
                }
                break;
            case 'POST': // 添加的逻辑
                    let str = '';
                    req.on('data',function (chunk) {
                        str+=chunk; //拼接后的结果是一个字符串
                    });
                    req.on('end',function () {
                        let user = JSON.parse(str); //将字符串转化成对象 少一个id
                        // 如果有数据 取最后一项的id+1 没数据 直接默认是1
                        user.id = users.length?users[users.length-1].id+1:1;
                        users.push(user);
                        res.end(JSON.stringify(user));
                    });
                break;
            case 'DELETE':
                if(id){
                    users = users.filter(item=>item.id!=id);
                    res.end(JSON.stringify({}));
                }
                break;
            case 'PUT':
                break
        }
        return;
    }

    // 处理静态文件的
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
