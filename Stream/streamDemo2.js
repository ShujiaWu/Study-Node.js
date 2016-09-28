/**
 * 写入数据
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');

var data = '写入测试';

var writerStream = fs.createWriteStream('out.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish',function () {
   console.log('写入完成')
});

writerStream.on('error',function (error) {
    console.log(error);
});

console.log('程序执行完毕');