/**
 * 文件读取截断，会修改原来的文件
 * Created by Yun on 2016/9/28.
 * E-mail：wushujia@vip.qq.com
 */
var fs = require('fs');
var buf = new Buffer(1024);

fs.open('out.txt', 'r+', function (error, fd) {
    if (error) {
        return console.log(error);
    }
    console.log('打开文件成功');
    fs.ftruncate(fd, 3, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('截取文件成功');
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytesRead, buffer) {
            if (err) {
                return console.log('读取文件失败：' + err);
            }
            if (bytesRead > 0) {
                console.log(buffer.toString(undefined, 0, bytesRead));
            }
            fs.close(fd, function (error) {
                if (error) {
                    return console.log(error);
                }
            })
        })
    });
    
});