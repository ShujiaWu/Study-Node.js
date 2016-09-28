/**
 * 打开、关闭文件，获取文件信息
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');

fs.open('fileDemo1.js','r',function (error, fd) {
   if (error){
       return console.log(error);
   }
    console.log('打开文件结束');

    fs.close(fd,function (error) {
        if (error){
            return console.log(error);
        }
        console.log('关闭文件结束');
    })
});

fs.stat('fileDemo1.js',function (error, stats) {
    if (error){
        return console.log(error);
    }
    console.log(stats);
    console.log('是否是文件夹：' + stats.isDirectory());
    console.log('是否是文件：' + stats.isFile());
});