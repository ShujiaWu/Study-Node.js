/**
 * 管道流
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');

var readerStream = fs.createReadStream('streamDemo.js');

var writerStream = fs.createWriteStream('out.txt');

readerStream.pipe(writerStream);

console.log('程序执行完毕');