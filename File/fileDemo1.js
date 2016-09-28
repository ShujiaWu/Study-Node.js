/**
 * 文件读取写入
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');
console.log('异步读取文件：');
fs.readFile('fileDemo1.js',function (error, data) {
    if (error){
        return console.log('读取文件发生异常：' + error);
    }
    console.log(data.toString())
});

console.log('同步读取文件：');
var data = fs.readFileSync('fileDemo1.js');
console.log(data.toString());


fs.writeFile('out.txt','这是用过程序写入的数据',function (error) {
    if (error){
        return console.log(error);
    }
    console.log('数据写入结束');
});
