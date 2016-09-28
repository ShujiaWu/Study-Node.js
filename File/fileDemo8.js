/**
 * 删除目录
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');

fs.rmdir('testDir',function (err) {
   if(err){
       return console.log('删除目录失败：' + err);
   }
    console.log('删除目录成功');
});