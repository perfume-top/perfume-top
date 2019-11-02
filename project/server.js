var http = require('http'), httpProxy = require('http-proxy');
var fs = require('fs');
var path = require('path');
    
// 新建一个代理 Proxy Server 对象  
var proxy = httpProxy.createProxyServer({});  
  
// 捕获异常  
proxy.on('error', function (err, req, res) {  
      res.writeHead(500, {  
          'Content-Type': 'text/plain'  
      });  
     res.end('Something went wrong. And we are reporting a custom error message.');  
});  
   
// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发  
var server = http.createServer(function(req, res) {  

    // 在这里可以自定义你的路由分发  
    var host = req.headers.host;
res.write('<head><style>a{font-size:50px;}</style><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>');
if (req.url.indexOf('/go') === 0) {
    res.end('<a href="baiduboxapp://v1/browser/open?upgrade=1&url=http%3A%2F%2Fyq01-jiangyudong.epc.baidu.com%3A8080%2Fwebpage%2Ftopic%2Finfo%3Ftopic_id%3D4453%26sa%3DAAA%26from%3DBBB">调起浏览框架</a>');
} else if (req.url.indexOf('/search') === 0) {
    res.end('<a href="baiduboxapp://v1/browser/open?upgrade=1&url=https%3A%2F%2Fm.baidu.com%2Fs%3Fword%3D123">直接调起搜索</a>');
} else if (req.url.indexOf('/presearch') === 0) {
    res.end('<a href="baiduboxapp://v1/easybrowse/open?url=http%3A%2F%2F172.24.138.96%3A8999%2Fsearch">先打开search框架</a>');
} else {
    res.end('<a href="baiduboxapp://v1/easybrowse/open?url=http%3A%2F%2F172.24.138.96%3A8999%2Fgo">先打开feed框架</a>');
}
    //if (req.url.indexOf('/api/') === 0) {
//       proxy.web(req, res, { target: 'http://localhost:3000' });
    //} else if (req.url.indexOf('/static/') === 0) {
    //    const buffer = fs.createReadStream(path.resolve('/Users/qiansicheng/perfume/webroot/', req.url.substring('/static/'.length)));
    //    buffer.pipe(res);
    //} else {
    //    proxy.web(req, res, { target: 'http://localhost:4200' });
    //}

    // switch(host){  
    //    case 'www.veblen.com':   
    //         proxy.web(req, res, { target: 'http://localhost:4200' });  
    //         break;  
    //    case 'boy.veblen.com':  
    //        proxy.web(req, res, { target: 'http://localhost:9527' });  
    //        break;
    //    default:  
    //        res.writeHead(200, {  
    //            'Content-Type': 'text/plain'  
    //        });  
    //      res.end('Welcome to my server!');  
    // }  


});  
 
console.log("listening on port 80")  
server.listen(80);
