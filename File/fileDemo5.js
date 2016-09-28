/**
 * 删除文件
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */

var fs = require('fs');

fs.unlink('out.txt',function (err) {
   if (err){
       console.log('删除文件失败' + err);
   }
    console.log('删除文件成功');
});