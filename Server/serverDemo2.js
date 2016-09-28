/**
 * GET请求
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (request, response) {
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    var req = util.inspect(url.parse(request.url));
    response.end(req);
}).listen(8000);