/**
 * Created by Yun on 2016/9/27.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require("fs");
fs.readFile('eventDemo.js',function (error, data) {
    if (error){
        console.log('发生错误');
        return;
    }
    console.log(data.toString());
});