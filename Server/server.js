/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{
       'Content-Type':'text/plain'
    });
    response.end('Hello World\n');
}).listen(8000);
console.log('Server running at http://127.0.0.1:8888/');
