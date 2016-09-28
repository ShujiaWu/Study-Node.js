/**
 * 读取目录
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');

fs.readdir('./',function (err, files) {
    if (err){
        return console.log('读取目录失败：' + err);
    }
    console.log('读取目录成功');
    files.forEach(function (file) {
        console.log(file);
    })
});
