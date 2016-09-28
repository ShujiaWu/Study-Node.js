/**
 * 读取文件
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');
var buf = new Buffer(1024);
fs.open('fileDemo1.js','r',function (error, fd) {
    if (error){
        return console.log(error);
    }
    //读取文件

    fs.read(fd,buf,0,buf.length,0,function (error,bytesRead,buffer) {
        if (error){
            return console.log(error);
        }
        console.log('读取的字节长度为：' + bytesRead);

        console.log('读取的内容是：' + buffer.toString(undefined,0,bytesRead));
    });

    fs.close(fd,function (error) {
        if (error){
            return console.log(error);
        }
        console.log('关闭文件')
    });
});