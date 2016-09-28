/**
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('客户端正在请求：' + pathName);

    fs.readFile(pathName.substr(1),function (err, data) {
        if (err){
            console.log(err);
            response.writeHead(404,{
                'Content-Type':'text/html'
            })
        }else{
            response.writeHead(200,{
                'Content-Type':'text/html'
            });
            response.write(data.toString());
        }
        response.end();
    })

}).listen(8000);