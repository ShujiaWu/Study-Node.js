/**
 * 从流中读取数据
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('../Buffer/bufferDemo.js');

readerStream.setEncoding('UTF8');

readerStream.on('data',function (chunk) {
    data += chunk;
});

readerStream.on('end',function () {
    console.log(data);
});

readerStream.on('error',function (error) {
    console.log(error);
});

console.log('程序执行完毕');
