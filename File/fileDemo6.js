/**
 * 创建目录
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');

fs.mkdir('testDir',function (err) {
   if (err){
       return console.log('创建目录失败：' + err);
   }
    console.log('创建目录成功');
});