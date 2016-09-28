/**
 * 路由
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;

    console.log('Path Name:' + pathName);

    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write('Hello World');
    response.end();
}).listen(8000);

console.log('Server listen on 8000');